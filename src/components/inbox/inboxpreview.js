import inboxdata from '../data/inbox.json'
import spamdata from '../data/spam.json'
import './inbox.css'



export const inboxlist = inboxdata.map((data, i) => {

    const preview = {
        maxWidth: "300px",
        padding: "20px 20px 20px 50px",
        borderBottom: "solid 1px black",
    }
    function handlePreview(e) {
        const index = document.getElementById(i).value
        console.log(index)

    }

    return (
        <button onClick={handlePreview} id={i} className="preview" style={preview} value={[data.mId, data.subject, data.content]}  >
            <h2 style={{paddingBottom: 10}}>{data.mId}</h2>
            <h3 style={{color: "#146fff", paddingBottom: 10}}>{data.subject}</h3>
            <p style={{color: "gray", height: "28px", overflow: "hidden"}} dangerouslySetInnerHTML={{__html: data.content}} />

        </button>
    )
})

export const spamlist = spamdata.map((data, i) => {
    console.log(i)
    const previewspam = {
        maxWidth: "300px",
        padding: "20px 20px 20px 50px",
        borderBottom: "solid 1px black",
    }
    function handlePreview(e) {
        const index = document.getElementById(i).value
        console.log(index)

    }

    return (
        <button onClick={handlePreview} id={i} className="preview" style={previewspam} value={[data.mId, data.subject, data.content]}  >
            <h2 style={{paddingBottom: 10}} >{data.mId}</h2>
            <h3 style={{color: "#146fff", paddingBottom: 10}}>{data.subject}</h3>
            <p style={{color: "gray", height: "34px", overflow: "hidden"}} dangerouslySetInnerHTML={{__html: data.content}} />

        </button>
    )
})
