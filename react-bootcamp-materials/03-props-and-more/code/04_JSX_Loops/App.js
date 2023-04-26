class App extends React.Component{
    render(){
       return(
           <div>
            <Friend
            name="Elton"
            hobbies={['Piano', 'Singing', 'Dancing']}
            />
           </div>
       )
    }
}

ReactDom.render(<App />, document.getElementById('root'));

