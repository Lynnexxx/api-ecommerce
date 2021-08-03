var pool = require('../db')

module.exports = {

    // Afficher tous les artisans

    getAllArtisans: function() {
        pool.query('select *from produits_africains.artisans', function (error, result){
            if(error)
                throw error;
            console.log(result.rows);
        });
    },


    // Afficher un artisan en particulier

    getArtisanById: function(id) {
        console.log('valeur de id:'+id);
        pool.query('select *from produits_africains.artisans where id=$1',[id], function (error, result){
            if(error)
                throw error; 
            console.log(result.rows);
        });
    },


   // Consulter l’artisan créateur d’un article

   getArtisanByArticle :function(id) {
       console.log('valeur de id'+id);
       var qury = "select artisan->>'nom' from produits_africains.artisans join produits_africains.articles on  id_artisans=artisans.id where articles.id=$1";
       pool.query(qury, [id],function(error, result){
           if(error)
                throw(error);
            console.log(result.rows);
       });
   },

   // supprimer un artisan
   deleteArtisanById: function(id){
        pool.query('delete from artisans where id=$1',[id], function(error,result){
            if(error)
                throw error;
        console.log(result.rows);    
        });
    },

    // Modifier un artisan 

    updateArtisanById: function(id) {
        console.log('id:' + id);

        pool.query('update artisans set id=$1 where id=$2', [id, id1], function (error, result){
            if(error)
                throw error; 
            console.log(result.rows);
        });
   
    },

    // obtenir le contrat d'un artisan
    getArtisanContratByid :function(id) {
        console.log('valeur de id'+id);
        var qury = "select refection from  produits_africains.articles    where id_artisans=$1";
        pool.query(qury, [id],function(error, result){
            if(error)
                 throw(error);
             console.log(result.rows);
        });
    },



    //modifier le contrat d’un artisan concernant un article

    updateArtisanContratByid :function(refection,id) {
        console.log('valeur de id'+id);
        var qury = "update articles set  refection =$1 where id=$2";
        pool.query(qury, [refection,id],function(error, result){
            if(error)
                 throw(error);
             console.log(result.rows);
        });
    },


    //consulter les articles associés à un artisan


    getAllArticlesByArtisan: function(id){

        

    }




}