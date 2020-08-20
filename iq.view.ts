namespace $.$$ {

	export class $hyoo_iq extends $.$hyoo_iq {

		title() {
			
			if( this.history().length > 200 ) {
				return super.title_result().replace( '{score}' , this.score().toFixed(0) )
			} else {
				return super.title_wait()
			}

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
