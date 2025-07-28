namespace $ {

	export class $hyoo_iq_neuron {
		
		constructor(
			public value: boolean = false,
			public depth: number = 0,
			public right: $hyoo_iq_neuron | null = null,
			public left: $hyoo_iq_neuron | null = null,
		) {}

		predict( history : readonly boolean[], pos = history.length - 1 ) : boolean {
			return this.locate( history, pos ).value
		}
		
		locate( history : readonly boolean[], pos = history.length - 1 ) : $hyoo_iq_neuron {
			
			if( pos < 0 ) return this
			
			const last = history[ pos ]
			if( last ) {
				if( !this.right ) return this
				return this.right.locate( history, pos - 1 )
			} else {
				if( !this.left ) return this
				return this.left.locate( history, pos - 1 )
			}

		}

		learn( next : boolean , history : readonly boolean[], pos = history.length - 1 ) : void {
			
			if( pos < 0 ) {
				this.value = next
				return
			}
			
			const tail = this.locate( history, pos )
			if( tail.value === next ) return
			
			const axon = new $hyoo_iq_neuron( next, tail.depth + 1 )
			if( history[ pos - tail.depth ] ) tail.right = axon
			else tail.left = axon
			
		}

		warp( history : readonly boolean[] ) : void {
			for( let pos = 0; pos < history.length; ++ pos ) {
				this.learn( history[ pos ], history, pos - 1 )
			}
		}
		
		size() : number {
			return 1 + ( this.right?.size() ?? 0 ) + ( this.left?.size() ?? 0 )
		}

	}

}
