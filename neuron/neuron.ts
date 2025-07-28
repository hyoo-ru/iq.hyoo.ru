namespace $ {

	export class $hyoo_iq_neuron extends Array< $hyoo_iq_neuron | null > {
		
		constructor(
			length: number,
			public value = 0,
			public depth = 0,
		) {
			super( length )
		}
		
		/** Generate story which continuous history. */
		generate( limit: number, history: readonly number[] = [] ): readonly number[] {
			
			const story = [ ... history ]
			
			for( let i = 0; i < limit; ++i ) {
				
				const tail = this.locate( story )
				if( tail.depth < story.length && tail.some( Boolean ) ) break
			
				story.push( tail.value )
			}
			
			return story.slice( history.length )
		}

		/** Predict next step for history. */
		predict( history: readonly number[], pos = history.length - 1 ): number {
			return this.locate( history, pos ).value
		}
		
		/** Study history untill remember. */
		remember( history: readonly number[] ): boolean {
			let studied = false
			while( this.study( history ) ) studied = true
			return studied
		}
		
		/** Learn history step by step. */
		study( history: readonly number[] ): boolean {
			
			let learned = false
			
			for( let pos = 0; pos < history.length; ++ pos ) {
				if( this.learn( history[ pos ], history, pos - 1 ) ) learned = true
			}
			
			return learned
		}
		
		/** Learn next step for history */
		learn( next: number , history: readonly number[], pos = history.length - 1 ): boolean {
			
			if( pos < 0 ) {
			
				if( this.value === next ) return false
				
				this.value = next
				return true
				
			}
			
			const tail = this.locate( history, pos )
			if( tail.value === next && !tail.some( Boolean ) ) return false
			
			const x =  pos - tail.depth
			if( x < 0 ) return false
			
			tail[ history[ x ] ] = new $hyoo_iq_neuron( this.length, next, tail.depth + 1 )
			
			return true
		}

		/** Locate meaningful neuron for history. */
		locate( history : readonly number[], pos = history.length - 1 ): $hyoo_iq_neuron {
			
			if( pos < 0 ) return this
			
			const kid = this[ history[ pos ] ]
			if( !kid ) return this
			
			return kid.locate( history, pos - 1 )
			
		}

		/** Count of neurons in subtree. */
		size(): number {
			return 1 + this.reduce( ( sum, kid )=> kid ? sum + kid.size() : sum, 0 )
		}

	}

}
