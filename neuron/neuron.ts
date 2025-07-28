namespace $ {

	export class $hyoo_iq_neuron extends Array< $hyoo_iq_neuron | null > {
		
		constructor(
			length: number,
			public value = 0,
			public depth = 0,
		) {
			super()
		}

		predict( history: readonly number[], pos = history.length - 1 ): number {
			return this.locate( history, pos ).value
		}
		
		warp( history: readonly number[] ): void {
			for( let pos = 0; pos < history.length; ++ pos ) {
				this.learn( history[ pos ], history, pos - 1 )
			}
		}
		
		learn( next: number , history: readonly number[], pos = history.length - 1 ): void {
			
			if( pos < 0 ) {
				this.value = next
				return
			}
			
			const tail = this.locate( history, pos )
			if( tail.value === next ) return
			
			tail[ history[ pos - tail.depth ] ] = new $hyoo_iq_neuron( this.length, next, tail.depth + 1 )
			
		}

		locate( history : readonly number[], pos = history.length - 1 ): $hyoo_iq_neuron {
			
			if( pos < 0 ) return this
			
			const kid = this[ history[ pos ] ]
			if( !kid ) return this
			
			return kid.locate( history, pos - 1 )
			
		}

		size(): number {
			return 1 + this.reduce( ( sum, kid )=> kid ? sum + kid.size() : sum, 0 )
		}

	}

}
