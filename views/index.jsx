const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads})  {
    return (
      <Default>
        <h2>Index Page</h2>
        <p>I have {breads[0].name} bread!</p>
      </Default>
    )
}

<div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>


module.exports = Index
