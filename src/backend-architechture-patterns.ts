// MVC Architchure - Model, View, Controller.It separates the view (UI), Model(data fetching or storage), Controller(medium between view and model that takes request from view and response from model). So, this helps in reusability, testability and such.

interface IArticle {
    id: String;
    title: String;
    body: Object;
    creationDate: Date;
}

// Model - handles data creation, updation, deletion (get or post data)

class ArticleModel {
    getAllArticles() {
        // logic to fetch all articles
        console.log('get all articles')
    }

    getArticle(id: string) {
        // logic to fetch an article
        console.log('get a specific article')
    }

    deleteArticle(id: string) {
    // logic to remove an article
    console.log('remove a specific article')
    }
}

// Controller - Handles request to read or write data (take request, send response)

class ArticleGetController {
    private model = new ArticleModel();

    fetchAll() {
        return this.model.getAllArticles()
    }

    getArticle(id: string) {
        return this.model.getArticle(id)
    }

    deleteArticle(id: string) {
        return this.model.deleteArticle(id)
    }
}

// View - view is basically UI, that is rendering the data or handling the input (display data or get user input). For ex. frontend.

// ---------------------------------------------------

// Respository Pattern - We basically have an interface and a repository for it which has methods to create, update, delete.

interface Person {
    name: string;
    age: string;
    hight: number;
}

class PersonRepository {
    private database: any;

    constructor(database: any) {
        this.database = database;
    }

    getPerson(id: string) {
        console.log('get a person')
    }

    getAllPersons() {
        console.log('getAllPersons')
    }

    updatePerson(id: string) {
        console.log('update a persons information')
    }

    deletePerson(id: string) {
        console.log('delete a person')
    }
}

// Here we can pass in any database. So, database layer is completely separate from other logic. This gives us more flexibility. It also help us make our code more testable sicne it's not tightly couple with database layer.