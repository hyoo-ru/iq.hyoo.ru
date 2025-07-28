namespace $.$$ {

	export class $hyoo_iq extends $.$hyoo_iq {

		right() {
			this.choice( 1 )
		}
		
		left() {
			this.choice( 0 )
		}

		choice( next: number ) {

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
			return Math.round( this.wins() / ( this.history().length + 1 ) * 200 - 100 )
		}

	}

}
