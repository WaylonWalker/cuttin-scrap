import React from 'react'

export default function PodcastGallery() {
  return (
    <section className="project GalleryWrapper">
      <div className="project TitleWrapper">
        <div className="bar" />
        <a href="https://anchor.fm/onebreathatatime" style={{ textDecoration: 'None' }}>
          <h1>Podcast</h1>
        </a>
        <div className="bar" />
      </div>

      <div className="project Gallery" style={{ maxWidth: '800px', margin: 'auto', padding: '5rem 0', display: 'flex', flexDirection: 'column' }}>
        <a href="https://anchor.fm/onebreathatatime" style={{ margin: 'auto' }}>
          <img src="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/1206781/1206781-1542527515904-146ef97688441.jpg" alt="" style={{ margin: 'auto' }} />
        </a>
        <p style={{ margin: 'auto', paddingTop: '30px' }}>Follow the <a href="https://anchor.fm/onebreathatatime">Link</a> to subscribe in your favorite Podcast Player</p>
      </div>
    </section >
  )
}
