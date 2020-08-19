namespace $ {

	export class $hyoo_iq_neuron {
		
		constructor(
			public prediction: boolean = false,
			public right: $hyoo_iq_neuron | null = null,
			public left: $hyoo_iq_neuron | null = null,
		) {}

		predict( history : boolean[] ) : boolean {
			
			if( history.length === 0 ) return this.prediction
			
			const last = history[ history.length - 1 ]
			if( last ) {
				if( !this.right ) return this.prediction
				return this.right.predict( history.slice( 0 , -1 ) )
			} else {
				if( !this.left ) return this.prediction
				return this.left.predict( history.slice( 0 , -1 ) )
			}

		}

		learn( next : boolean , history : boolean[] ) : void {
			
			if( history.length === 0 ) {
				this.prediction = next
				return
			}
			
			const last = history[ history.length - 1 ]
			if( last ) {
				if( this.right ) {
					return this.right.learn( next, history.slice( 0 , -1 ) )
				} else if( this.prediction !== next ) {
					this.right = new $hyoo_iq_neuron( next )
				}
			} else {
				if( this.left ) {
					return this.left.learn( next, history.slice( 0 , -1 ) )
				} else if( this.prediction !== next ) {
					this.left = new $hyoo_iq_neuron( next )
				}
			}

		}

		size() : number {
			return 1 + ( this.right?.size() ?? 0 ) + ( this.left?.size() ?? 0 )
		}

	}

}
