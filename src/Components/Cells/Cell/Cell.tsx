import './cell.css'
const Cell = ({width,height,children}:any) => {
  return (
    <div 
    className={`cell grow shrink basis-[${width}px] h-[${height}px]   flex p-[10px]`}>
        {children}
    </div>
  )
}

export default Cell