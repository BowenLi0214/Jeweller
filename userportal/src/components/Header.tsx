import React, { useState, useEffect } from 'react'
import './Header.scss'
import cart from '../assets/img/Cart.png'
import search from '../assets/img/search.png'
import Chip from '@material-ui/core/Chip'
import { TextField, GridList } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Slider from './Slider'
import { getCatalogues } from '../api'

const Header: React.FC = (props: any, state: any) => {
  const [catalogues, setCatalogues] = useState([])
  useEffect(() => {
    loadProducts()
  }, [])
  const loadProducts = async () => {
    const result = await getCatalogues()
    const { data } = result
    setCatalogues(data)
  }
  const handleClick = () => {
    console.info('You clicked the Chip.')
  }
  return (
    <div className='header'>
      <Grid spacing={1} container alignItems='flex-end' className='socialBar'>
        <Grid item xs={1}>
          <img src={search} className='search'></img>
        </Grid>
        <Grid item className='inputField' xs={10}>
          <TextField
            id='input-with-icon-grid'
            variant='outlined'
            fullWidth
            size='small'
            className='input'
          />
        </Grid>
        <Grid item className='cartbtn' xs={1}>
          <img src={cart} className='cart'></img>
        </Grid>
        <Grid item xs={12}>
          <GridList className='gridList' cols={2.5}>
            {catalogues.length > 0 &&
              catalogues.map((catalogue: any) => (
                <Chip
                  size='small'
                  label={catalogue.name}
                  onClick={handleClick}
                  className='chip'
                  clickable
                />
              ))}
          </GridList>
        </Grid>
      </Grid>

      <Slider></Slider>
    </div>
  )
}

export default Header
