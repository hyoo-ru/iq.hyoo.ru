namespace $ {

	const { per } = $mol_style_unit

	$mol_style_define( $hyoo_iq , {

		History: {
			padding: 0,
			Plot: {
				margin: 0,
			},
		},

		Description: {
			margin: 'auto',
		},

		Choices: {
			$mol_button: {
				flex: {
					basis: per(50),
					shrink: 1,
				},
			},
		},

	} )

}
