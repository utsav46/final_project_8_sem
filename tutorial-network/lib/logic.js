

/*'use strict'; */

function ChangeOwner(tx) {
    
    tx.medicine.owner = tx.newOwner;
    
      // Get the asset registry for the pizza asset.
      return getAssetRegistry('org.mediledger.Medicine')
          .then(function (assetRegistry) {
  
              // Update the asset in the pizza asset registry.
              return assetRegistry.update(tx.medicine);
          });
  }