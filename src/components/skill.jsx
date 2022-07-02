import '../css/skill.css'

function Skill(){
    return(
<div className='main2'>


<div className='container'>
    <div className='card'>
        <div className='box'>
            <div className='percent'>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className='number'>
                    <h2>90<span>%</span></h2>
                </div>
            </div>
            <h2 className='text'>Html</h2>
        </div>
    </div>

    <div className='card'>
        <div className='box'>
            <div className='percent'>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className='number'>
                    <h2>85<span>%</span></h2>
                </div>
            </div>
            <h2 className='text'>CSS</h2>
        </div>
    </div>

    <div className='card'>
        <div className='box'>
            <div className='percent'>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className='number'>
                    <h2>60<span>%</span></h2>
                </div>
            </div>
            <h2 className='text'>JavaScript</h2>
        </div>
    </div>

</div>

</div>
    )
}

export default Skill;