let value = prompt('Type a number');
c = (value < 0 ) ? -1 : (value >0) ? 1 : 0
switch (c)
{
    case 1:
        alert(1)
        break
    case -1:
        alert (-1)
        break
    default :
        alert (0)
}