namespace $ {

	const { per , rem } = $mol_style_unit

	$mol_style_define( $hyoo_iq , {

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
					margin: [ 0 , rem(.75) ],
				},
			},
		},

	} )

}
