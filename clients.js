var pool = require('../db')

module.exports = {

    // Afficher tous les clients

    getAllClients: function() {
        pool.query('select *from produits_africains.clients', function (error, result){
            if(error)
                throw error;
            console.log(result.rows);
        });
    },


    // Afficher un client en particulier

    getClientById: function(id) {
        console.log('valeur de id:'+id);
        pool.query('select *from produits_africains.clients where id=$1',[id], function (error, result){
            if(error)
                throw error; 
            console.log(result.rows);
        });
    }
}