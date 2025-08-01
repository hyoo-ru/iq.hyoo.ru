namespace $ {

	const { per , rem } = $mol_style_unit

	$mol_style_define( $hyoo_iq , {
		
		Score: {
			color: $mol_theme.special,
			textShadow: '0 0',
		},
		
		Body_content: {
			padding: 0,
			align: {
				self: 'stretch',
			},
		},

		Description: {
			margin: 'auto',
			padding: rem(.75),
		},
		
		History_log: {
			display: 'flex',
			margin: $mol_gap.block,
			padding: $mol_gap.block,
			flex: {
				direction: 'row-reverse',
			},
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
		
		Score_final: {
			opacity: .5,
			line: {
				height: '1.5em',
			},
			justify: {
				self: 'center',
			},
			font: {
				size: `50vmin`,
			},
		},

	} )

}
