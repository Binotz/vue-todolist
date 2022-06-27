// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

var app = new Vue({
    el:'#root',
    data:{
        inputTodo: null,
        todos:[
            {
                text: 'fare la milestone 1',
                done: true
            },
            {
                text: 'fare la milestone 2',
                done: true
            },
            {
                text: 'fare la milestone 3',
                done: true
            },
            {
                text: 'fare la milestone 4 (che non esiste)',
                done: false
            },
        ]
    },
    methods:{
        //MILESTONE 2
        //removeTodo: rimuovo l'elemento dalla lista in base alla sua posizione (alla pressione sulla X)
        removeTodo: function(index){
            this.todos.splice(index,1);
        },
        //MILESTONE 3
        // addTodo: aggiungo un todo in base all'input dell'utente
        addTodo: function(){
            if (!(this.inputTodo === null)){
                this.todos.push({
                    text: this.inputTodo,
                    done: false
                });
                this.inputTodo = null
            }
        }
    }
});
