import React from 'react'

const WhitelistInfo1 = () => {
    return (<>
        <div className="whitelist-info-1" style={{borderRadius:'4px'}}>
            <div className="whitelist-title">
                <div className="whitelist-title-part1">
                    <p style={{fontFamily:'avenir',color:'white'}} className="whitelist-hashtag">#</p>
                    <p style={{fontFamily:'avenir',color:'white'}} className="whitelist-main-title">Top 3 activities who get a reward</p>
                </div>
                <div className="whitelist-title-part2">
                    <p style={{fontFamily:'avenir',color:'white'}} className="whitelist-main-title-votes">Votes</p>
                </div>

            </div>
            <div className="whitelist-table-body">
                <div className="whilist-list-table">
                    <div className="whitelist-title-part1">
                        <p style={{fontFamily:'avenir',color:'white'}} className="whitelist-no">1</p>
                        <p style={{fontFamily:'avenir',color:'white'}} className="whitelist-main-disc">https://www.instagram.com/krechet_official/?hl=..</p>
                    </div>
                    <div className="whitelist-title-part2" style={{borderRadius:'2px',background:'#1214fd'}}>
                        <p style={{fontFamily:'avenir',color:'white',marginTop:'10px'}} className="whitelist-main-title-votes-disc">340234</p>
                    </div>
                </div>
            </div>
            <div className="whitelist-see-more">
                <p style={{fontFamily:'avenir',color:'white'}} className="see-more-text">See more</p>
            </div>
        </div>
        <div className="whitelist-info-2">
            <div className="whitelist-form-wrapper">
                <form className="whitelist-submit-form">
                    <input className="whitelist-input"
                    ></input>
                    <button style={{border:'none',borderRadius:'2px',background: '#1214fd',color: '#ffffff',fontSize: '14px',fontFamily: 'avenir'
                }} className="whitelist-submit-button ">Submit</button>
                </form>
            </div>
            <div className="whitelist-how-it-works">
                <h3 className="how-it-works-head">How it works?</h3>
                <div className="whitelist-steps">
                    <div className="whitelist-step-1-box">
                        <p style={{fontFamily:'avenir',color:'white'}} className="point-1">1. Share pool in social networks</p>
                    </div>
                    <div className="whitelist-step-2-box">
                        <p style={{fontFamily:'avenir',color:'white'}} className="point-2">2. Then insert the link in the field and submit this</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default WhitelistInfo1
