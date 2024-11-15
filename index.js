const Box = props => {
  //  Write your code here.
  const {className, name} = props

  return (
    <div className={`box ${className}`}>
      <p className='font'>{name}</p>
    </div>
  )
}

const element = (
  <div className='bg-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='box-container'>
      <Box className='small' name='Small' />
      <Box className='medium' name='Medium' />
      <Box className='large' name='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
