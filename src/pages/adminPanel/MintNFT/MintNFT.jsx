import React from 'react'
import './MintNFT.scss'
import Dropzone from '../../../components/dropzone'
import Overlay from '../../../containers/Overlay/Overlay'

import { sign_message, mint } from "../../../utils/services/filedeploy";

function MintNFT() {

    function clickMint(input){
        // sign_message()
        mint('QmQ9MJfRRyXUgFHkFYc5SzaF1MJ497D9ZDT5UYxgWvzuPg', 'origami.glb', 12345, "1", 8001)
    }

    return (
        <div className="mintNFT">
            {false?<Overlay />:null}
            <div className="mintNFT__title">
                <p>Mint NFT</p>
            </div>
            <div className="mintNFT__content">
                <p>Preview Image <br /> <small>: PNG, JPEG, GIF. Max size: 4 MB</small></p>

                <Dropzone />

                <div className="fieldContainer">
                    <div className="fieldContainer__cid">Object CID</div>
                    <input type="text" placeholder='Paste your CID' />
                </div>
                <div className="fieldContainer">
                    <div className="fieldContainer__title">Object Name</div>
                    <input type="text" placeholder='Item Name' />
                </div>
                <div className="fieldContainer">
                    <div className="fieldContainer__title">Description</div>
                    <div className="fieldContainer__information">
                        The description will be included on the item’s detail page underneath its Image. Markdown syntax is supported.
                    </div>
                    <textarea placeholder='Description here'></textarea>
                </div>

                <button className="fileBtn ptr" onClick={() => { clickMint('mint') }}>Mint </button>

            </div>
        </div>
    )
}

export default MintNFT