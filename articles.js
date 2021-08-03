var pool = require('../db')

module.exports = {

    

    // Afficher tous les articles

    getAllArticles: function() {
        pool.query('select *from produits_africains.articles', function (error, result){
            if(error)
                throw error;
            console.log(result.rows);
        });
    },


    // Afficher un article en particulier

    getArticleById: function(id) {
        console.log('valeur de id:'+id);
        pool.query('select *from produits_africains.articles where id=$1',[id], function (error, result){
            if(error)
                throw error; 
            console.log(result.rows);
        });
    },



    // Afficher tous les articles par catégorie

    getArticleByCategorie: function(categorie){
        console.log('categorie:' + categorie);

        var qury= "select article from produits_africains.articles where article->>'categorie'=$1";
        pool.query(qury,[categorie], function(error, result){
            if(error)
                throw error;
            console.log(result.rows);

        });
    },


    //Obtenir  la ou les categories d'un article d'un id$

    getArticleCategorieById: function(id){
        console.log('id:' + id);

        var qury= "select article->>'categorie' from produits_africains.articles where id=$1";
        pool.query(qury,[id], function(error, result){
            if(error)
                throw error;
            console.log(result.rows);

        });
    },


    //Afficher un article en connaissant sa catégorie et son id(cas où le même article appartient à plusieurs catégories)--afficher un article dans sa catégorie

    getArticleByCategorieandId: function(id, categorie){
        console.log('id:' + id);

        var qury= "select * from produits_africains.articles where id=$1 and article->>'categorie'=$2";
        pool.query(qury,[id,categorie], function(error, result){
            if(error)
                throw error;
            console.log(result.rows);

        });
    },


    // Consulter les articles ayant été refectionnés ou non
     
    getAllArticlesRefectionOrNot: function(refection){
        console.log('refection : '+refection);

        var qury= "select * from produits_africains.articles where refection=$1";
        pool.query(qury,[refection], function(error, result){
            if(error)
                throw error;
            console.log(result.rows);

        });
    },
    // verifier si un article a demandé à être réfectionné
    getArticleRefection: function(id){
        console.log('refection : '+refection);

        var qury= "select refection from produits_africains.articles where  id = $1 ";
        pool.query(qury,[id], function(error, result){
            if(error)
                throw error;
            console.log(result.rows);

        });
    },




    // Modifier un article d'un id$

    updateArticleById: function(id) {
        console.log('id:' + id);

        pool.query('update articles set id=$1 where id=$2', [id, id1], function (error, result){
            if(error)
                throw error; 
            console.log(result.rows);
        });
   
    },

   // Modifier le nom d'un article
   updateArticleByName: function(name) {
    
        var qury = "update articles set article= jsonb_set(article, '{nom_article}',$1)";
        pool.query(qury,[name], function (error, result){
            if(error)
                throw error; 
            console.log(result.rows);
        });
    },

    //Modifier la catégorie d'un article
    updateArticleByCategorie: function(id, categorie) {
    
        var qury = "update articles set categorie='$2 where id=$1";
        pool.query(qury,[id,categorie], function (error, result){
            if(error)
                throw error; 
            console.log(result.rows);
        });
    },




    //supprimer un article 

    deleteArticleById: function(id){
        pool.query('delete from articles where id=$1',[id], function(error,result){
            if(error)
                throw error;
            console.log(result.rows);    
        });


    },

    //supprimer tous les articles d'une catégorie

    deleteAllArticlesByCategorie: function(categorie){
        var qury = "delete from articles where article->> 'categorie' = $1";
        pool.query(qury, [categorie], function(error, result){
            if (error)
                throw error;
            console.log(result.rows);  
        });

    },


    // supprimer un article d’une catégorie donnée

    deleteArticleByCategorieandId: function(id,categorie){
        var qury = "delete from produits_africains.articles where id=$1 and article->>'categorie'=$2";
        pool.query(qury, [id,categorie], function(error, result){
            if (error)
                throw error;
            console.log(result.rows);  
        });

    },



    // supprimer un article d’un nom donné

    deleteArticleByName: function(name){
        var qury = "delete from articles where article->> 'nom_article' = $1";
        pool.query(qury, [name], function(error, result){
            if (error)
                throw error;
            console.log(result.rows);  
        });

    }






    


};