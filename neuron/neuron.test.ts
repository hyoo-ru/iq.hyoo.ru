namespace $ {
	$mol_test({

		'Empty brain'() {
		
			const brain = new $hyoo_iq_neuron
		
			$mol_assert_equal( brain.size() , 1 )
			$mol_assert_equal( brain.predict( [] ) , false )
		
		},

		'Root switch'() {
		
			const brain = new $hyoo_iq_neuron
			brain.learn( true , [] )
		
			$mol_assert_equal( brain.size() , 1 )
			$mol_assert_equal( brain.predict( [] ) , true )
			$mol_assert_equal( brain.predict( [ true ] ) , true )
			$mol_assert_equal( brain.predict( [ false ] ) , true )
		
		},

		'Right way'() {
			
			const brain = new $hyoo_iq_neuron
			brain.learn( true , [ true ] )
			
			$mol_assert_equal( brain.size() , 2 )
			$mol_assert_equal( brain.predict( [ true ] ) , true )
			$mol_assert_equal( brain.predict( [ false ] ) , false )
		
		},

		'Left way'() {
			
			const brain = new $hyoo_iq_neuron
			brain.learn( true , [ false ] )

			$mol_assert_equal( brain.size() , 2 )
			$mol_assert_equal( brain.predict( [ true ] ) , false )
			$mol_assert_equal( brain.predict( [ false ] ) , true )

		},

		'Both way'() {
		
			const brain = new $hyoo_iq_neuron
			brain.learn( true , [ true ] )
			brain.learn( true , [ false ] )
		
			$mol_assert_equal( brain.size() , 3 )
			$mol_assert_equal( brain.predict( [] ) , false )
			$mol_assert_equal( brain.predict( [ true ] ) , true )
			$mol_assert_equal( brain.predict( [ false ] ) , true )
		
		},

		'Deep no switch'() {
		
			const brain = new $hyoo_iq_neuron
			brain.learn( true , [ true ] )
			brain.learn( true , [ true , true ] )
		
			$mol_assert_equal( brain.size() , 2 )
			
		},
		
		'Deep switch'() {
			
			const brain = new $hyoo_iq_neuron
			brain.learn( true , [ true ] )
			brain.learn( false , [ false , true ] )
			
			$mol_assert_equal( brain.size() , 3 )
			$mol_assert_equal( brain.predict( [] ) , false )
			$mol_assert_equal( brain.predict( [ true ] ) , true )
			$mol_assert_equal( brain.predict( [ true , true ] ) , true )
			$mol_assert_equal( brain.predict( [ false , true ] ) , false )
			$mol_assert_equal( brain.predict( [ false , false ] ) , false )
		
		},

		'Warp history'() {
			
			const brain = new $hyoo_iq_neuron
			brain.warp( [ true, false, true, true ] )
			
			$mol_assert_equal( brain.predict( [] ) , true )
			$mol_assert_equal( brain.predict( [ true ] ) , false )
			$mol_assert_equal( brain.predict( [ true, false ] ) , true )
			$mol_assert_equal( brain.predict( [ true, false, true ] ) , true )
			$mol_assert_equal( brain.predict( [ true, false, true, true ] ) , false )
			
		},

	})
}
