namespace $.$$ {

	export class $hyoo_iq extends $.$hyoo_iq {

		title() {
			const score = this.history().length > 200 ? this.score().toFixed(0) : 'need 200 clicks'
			return super.title().replace( '{score}' , score )
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
			
			brain.learn( next , history )
			this.history([ ... history , next ])

			this.score_series([ ... this.score_series() , this.score() ])

		}

		@ $mol_mem
		score() {
			return this.Brain().size() / ( this.history().length + 1 ) * 100
		}

	}

}
