
/*'use strict'; */

/**
     * Sample transaction processor function.
     * @param {org.example.mynetwork.ChangeOwner} tx The transaction that changes the owner of the pizza (i.e. from Factory to Wholesaler).
     * @transaction
     */



function ChangeOwner(tx) {
    
    tx.drug.presentOwner = tx.newOwner;
  	
    
      // Get the asset registry for the pizza asset.
      return getAssetRegistry('org.example.mynetwork.Drug')
          .then(function (assetRegistry) {
  
              // Update the asset in the pizza asset registry.
              return assetRegistry.update(tx.drug);
          });
  }
