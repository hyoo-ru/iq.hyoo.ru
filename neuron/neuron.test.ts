namespace $ {
	$mol_test({

		'Empty brain'() {
		
			const brain = new $hyoo_iq_neuron(2)
		
			$mol_assert_equal( brain.size() , 1 )
			$mol_assert_equal( brain.predict( [] ) , 0 )
		
		},

		'Root switch'() {
		
			const brain = new $hyoo_iq_neuron(2)
			brain.learn( 1 , [] )
		
			$mol_assert_equal( brain.size() , 1 )
			$mol_assert_equal( brain.predict( [] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 0 ] ) , 1 )
		
		},

		'Right way'() {
			
			const brain = new $hyoo_iq_neuron(2)
			brain.learn( 1 , [ 1 ] )
			
			$mol_assert_equal( brain.size() , 2 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 0 ] ) , 0 )
		
		},

		'Left way'() {
			
			const brain = new $hyoo_iq_neuron(2)
			brain.learn( 1 , [ 0 ] )

			$mol_assert_equal( brain.size() , 2 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 0 )
			$mol_assert_equal( brain.predict( [ 0 ] ) , 1 )

		},

		'Both way'() {
		
			const brain = new $hyoo_iq_neuron(2)
			brain.learn( 1 , [ 1 ] )
			brain.learn( 1 , [ 0 ] )
		
			$mol_assert_equal( brain.size() , 3 )
			$mol_assert_equal( brain.predict( [] ) , 0 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 0 ] ) , 1 )
		
		},

		'Deep no switch'() {
		
			const brain = new $hyoo_iq_neuron(2)
			brain.learn( 1 , [ 1 ] )
			brain.learn( 1 , [ 1 , 1 ] )
		
			$mol_assert_equal( brain.size() , 2 )
			
		},
		
		'Deep switch'() {
			
			const brain = new $hyoo_iq_neuron(2)
			brain.learn( 1 , [ 1 ] )
			brain.learn( 0 , [ 0 , 1 ] )
			
			$mol_assert_equal( brain.size() , 3 )
			$mol_assert_equal( brain.predict( [] ) , 0 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1 , 1 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 0 , 1 ] ) , 0 )
			$mol_assert_equal( brain.predict( [ 0 , 0 ] ) , 0 )
		
		},

		'Study history'() {
			
			const brain = new $hyoo_iq_neuron(2)
			brain.study( [ 1, 0, 1, 1 ] )
			
			$mol_assert_equal( brain.predict( [] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 0 )
			$mol_assert_equal( brain.predict( [ 1, 0 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1, 0, 1 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1, 0, 1, 1 ] ) , 0 )
			
		},

		'Non boolean'() {
			
			const brain = new $hyoo_iq_neuron(8)
			brain.study( [ 1, 2, 3, 1 ] )
			
			$mol_assert_equal( brain.predict( [] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1 ] ) , 2 )
			$mol_assert_equal( brain.predict( [ 1, 2 ] ) , 3 )
			$mol_assert_equal( brain.predict( [ 1, 2, 3 ] ) , 1 )
			$mol_assert_equal( brain.predict( [ 1, 2, 3, 1 ] ) , 2 )
			
		},

		'Finite sequence generation'() {
			
			const brain = new $hyoo_iq_neuron(8)
			brain.study( [ 1, 2, 3, 4 ] )
			
			$mol_assert_equal( brain.generate( 5, [ 2 ] ) , [ 3, 4 ] )
			
		},

		'Limited infinite sequence generation'() {
			
			const brain = new $hyoo_iq_neuron(8)
			brain.study( [ 1, 2, 3, 1 ] )
			
			$mol_assert_equal( brain.generate( 5, [ 1 ] ) , [ 2, 3, 1, 2, 3 ] )
			
		},

	})
}
