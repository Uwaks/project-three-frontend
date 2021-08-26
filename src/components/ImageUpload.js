import React from 'react'
import axios from 'axios'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

function ImageUploadField({ onChange, labelText, name, value }) {
  const [isUploading, setIsUploading] = React.useState(false)

  const handleUpload = async event => {
    setIsUploading(true)
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    const res = await axios.post(uploadUrl, data)
    onChange(res.data.url, name)
    setIsUploading(false)
  }

  return (
    <>
      <label className="label">{labelText || 'Upload Image'}</label>
      {isUploading &&
        <p>Uploading image....</p>
      }
      {value && (
        <div style={{ width: '300px' }}>
          <img
            src={value}
            alt="selected"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      )}
      {!isUploading && !value && (
        <>
          <div className="file is-boxed is-fullwidth has-text-centered">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                name={name}
                onChange={handleUpload}
              />
              <span className="file-cta">
                <span className="file-label">Choose a file…</span>
              </span>
            </label>
          </div>
        </>
      )}
    </>
  )
}

export default ImageUploadField



