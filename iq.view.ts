namespace $.$$ {

	export class $hyoo_iq extends $.$hyoo_iq {

		title() {
			
			// if( this.history().length > this.required() ) {
				return super.title_result().replace( '{score}' , this.score().toFixed(0) )
			// } else {
			// 	return super.title_wait().replace( '{required}' , this.required().toString() )
			// }

		}

		right() {
			this.choice( true )
		}
		
		left() {
			this.choice( false )
		}

		choice( next : boolean ) {

			const brain = this.Brain()
			const history = this.history()
			
			let prediction = brain.predict( history )
			let teach = next
			
			// if( Math.random() < .1 ) teach = !teach
			brain.learn( teach , history )
			
			this.history([ ... history , teach ])
			if( next !== prediction ) this.wins( this.wins() + 1 )

			this.score_series([ ... this.score_series() , this.score() ])

		}
		
		@ $mol_mem
		history_log() {
			return this.history().map( val => val ? '▶' : '◀' ).join( '' )
		}

		@ $mol_mem
		wins( next = 0 ) {
			return next
		}
		
		@ $mol_mem
		score() {
			return this.wins() / ( this.history().length + 1 ) * 200 - 100
		}

	}

}
