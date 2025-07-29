namespace $ {
	
	export class $hyoo_iq_text extends Object {
		
		readonly dict = new Map< string, number >()
		readonly list = [] as string[]
		
		readonly brain = new $hyoo_iq_neuron( NaN )

		tokenize( text: string ) {
			return text.split( /([\p{L}\d]+)/u ).filter( Boolean )
		}
		
		encode( text: string ) {
			return this.tokenize( text ).map( token => {
					
				if( this.dict.has( token ) ) return this.dict.get( token )!
				
				const index = this.list.length
				this.dict.set( token, index )
				this.list.push( token )
				
				return index
			} )
		}
		
		decode( indexes: readonly number[] ) {
			return indexes.map( n => this.list[ n ] ).join( '' )
		}
		
		remember( text: string ) {
			return this.brain.remember( this.encode( text ) )
		}
		
		generate( limit: number, prefix: string ) {
			return this.decode( this.brain.generate( limit, this.encode( prefix ) ) )
		}
		
	}
	
}
