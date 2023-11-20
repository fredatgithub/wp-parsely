/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element';
import { subscribe, select } from '@wordpress/data';
// eslint-disable-next-line import/named
import { BlockInstance } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Telemetry from './telemetry';

/**
 * BlockChangeMonitor component.
 *
 * This is a React component that monitors changes in the WordPress block editor.
 * It does not render anything, but it uses the useEffect hook to subscribe to changes in the block editor
 * when the component is mounted.
 * When the block editor changes, it checks if blocks have been added or removed by comparing the current
 * list of blocks with the previous one.
 * If a block has been added or removed, it logs a message to the console.
 * When the component is unmounted, it unsubscribes from the block editor changes.
 *
 * @since 3.12.0
 */
const BlockChangeMonitor = () => {
	/**
	 * The prefix of the block's name.
	 * @since 3.12.0
	 * @type {string}
	 */
	const parselyBlockPrefix = 'wp-parsely/';

	/**
	 * The useEffect hook is used to subscribe to changes in the block editor when the component is mounted.
	 * It first gets the current list of blocks and creates a Set of the block IDs.
	 * Then, it subscribes to changes in the block editor.
	 * When the block editor changes, it gets the new list of blocks and creates a new Set of the block IDs.
	 * It checks if the size of the new block IDs Set is different from the last one, indicating that a block
	 * has been added or removed.
	 * If a block has been added or removed, it logs a message to the console.
	 * Finally, it updates the last block IDs with the new block IDs for the next comparison.
	 * When the component is unmounted, it unsubscribes from the block editor changes.
	 *
	 * @since 3.12.0
	 */
	useEffect( () => {
		const getBlockList = () => select( 'core/block-editor' ).getBlocks() as BlockInstance[];
		let lastBlockIds = new Set( getBlockList().map( ( block ) => block.clientId ) );

		const unsubscribe = subscribe( () => {
			const newBlockList = getBlockList();
			const newBlockIds = new Set( newBlockList.map( ( block ) => block.clientId ) );

			if ( newBlockIds.size !== lastBlockIds.size ) {
				const blocksAdded = newBlockIds.size > lastBlockIds.size;
				const changedBlockList = blocksAdded ? newBlockList : Array.from( lastBlockIds );

				for ( const block of changedBlockList ) {
					if ( blocksAdded ) {
						// block is a BlockInstance when blocks are added
						const blockInstance = block as BlockInstance;
						if ( blockInstance.name.startsWith( parselyBlockPrefix ) && ! lastBlockIds.has( blockInstance.clientId ) ) {
							Telemetry.trackEvent( 'block_added', { block: blockInstance.name } );
						}
					} else {
						// block is a string (client ID) when blocks are removed
						const clientId = block as string;
						if ( ! newBlockIds.has( clientId ) ) {
							Telemetry.trackEvent( 'block_removed', { block: clientId } );
						}
					}
				}
			}

			lastBlockIds = newBlockIds;
		} );

		return () => {
			unsubscribe();
		};
	}, [] );

	return null; // This component does not render anything
};

export default BlockChangeMonitor;
