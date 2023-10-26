import React from 'react'
import './categorie.css'
import table from './../assets/table-a-dinner.png'
import bookshell from './../assets/etagere-a-livres.png'
import sofa from './../assets/sofa.png'
import bed from './../assets/lit-double.png'

const Categories = () => {
  return (
    <div className='container-categories'>
        <div className="items-categories">
            <div className="item1">
                <h1>top categories</h1>
                <p>Explore our diverse collection of furniture, decor, textiles, and interior accessories.</p>
                <button>view all</button>
            </div>
            <div className="item2">
                <div><img src={bed} alt="bed" /></div>
                <div><img src={table} alt="drinking table" /></div>
                <div><img src={bookshell} alt="bookshell" /></div>
                <div><img src={sofa} alt="sofa" /></div>
            </div>
        </div>
    </div>
  )
}

export default Categories