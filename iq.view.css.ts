namespace $ {

	const { per , rem } = $mol_style_unit

	$mol_style_define( $hyoo_iq , {
		
		Score: {
			color: $mol_theme.special,
			textShadow: '0 0',
		},
		
		Body_content: {
			align: {
				self: 'stretch',
			},
		},

		History_log: {
			display: 'flex',
			padding: $mol_gap.block,
			flex: {
				direction: 'row-reverse',
			},
			align: {
				self: 'center'
			},
		},

		Choices: {
			'>': {
				$mol_button: {
					flex: {
						basis: per(10),
						shrink: 1,
						grow: 1,
					},
					justifyContent: 'center',
					userSelection: 'none',
				},
			},
		},
		
		Score_final: {
			lineHeight: '1.5em',
			justify: {
				self: 'center',
			},
			font: {
				family: 'monospace',
				size: `8vmin`,
			},
		},

	} )

}
