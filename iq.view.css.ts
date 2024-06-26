namespace $ {

	const { per , rem } = $mol_style_unit

	$mol_style_define( $hyoo_iq , {
		
		Body_content: {
			align: {
				self: 'stretch',
			},
		},

		Description: {
			margin: 'auto',
			padding: rem(.75),
		},

		Choices: {
			margin: [ 0 , rem(.75) ],
			'>': {
				$mol_button: {
					flex: {
						basis: per(50),
						shrink: 1,
					},
					justifyContent: 'center',
					margin: [ 0 , rem(.75) ],
				},
			},
		},

	} )

}
