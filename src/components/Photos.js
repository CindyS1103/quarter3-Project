import React, { Component } from 'react';
import theImage from '../images/IMG_3780.jpg'
import theImage1 from '../images/IMG_3793.jpg'
import theImage2 from '../images/0601181152_HDR.jpg'
import theImage3 from '../images/IMG_3669.jpg'
import theImage4 from '../images/0604180533a.jpg'
import theImage5 from '../images/0912120705a.jpg'
import theImage6 from '../images/IMG_3754.jpg'
import theImage7 from '../images/IMG_3676.jpg'
import theImage8 from '../images/0601181142a_HDR.jpg'
import theImage9 from '../images/IMG_3759.jpg'
import theImage10 from '../images/IMG_3757.jpg'
import theImage11 from '../images/IMG_3755.jpg'
import theImage12 from '../images/IMG_3769.jpg'
import theImage13 from '../images/0601181142a_HDR.jpg'
import theImage14 from '../images/IMG_3764.jpg'





class Photos extends Component{
  render() {


    return (
      <div className="photo-div" >
      <div class="responsive" style={{marginTop:'20px'}}>
      <img src={theImage} className="photobomb" alt="Trolltunga Norway"  />
</div>
<div class="responsive"  >
      <img src={theImage1} className="photobomb" alt="Forest"  />
</div>
<div class="responsive"  >
      <img src={theImage14} className="photobomb" alt="Forest"  />
</div>
<div class="responsive">
      <img src={theImage2} className="photobomb" alt="Forest"  />
</div>
<div class="responsive">
      <img src={theImage12} className="photobomb" alt="Forest"  />
</div>
<div class="responsive">
      <img src={theImage11} className="photobomb" alt="Forest"  />
</div>

<div class="responsive">
      <img src={theImage3} className="photobomb" alt="Forest"  />
</div>

<div class="responsive"  >
      <img src={theImage4} className="photobomb" alt="Northern Lights"  />
</div>
<div class="responsive"  >
      <img src={theImage5} className="photobomb" alt="Forest"  />
</div>
<div class="responsive"  >
      <img src={theImage6} className="photobomb" alt="Forest"  />
</div>
<div class="responsive"  >
      <img src={theImage7} className="photobomb" alt="Forest"  />
</div>
<div class="responsive"  >
      <img src={theImage8} className="photobomb" alt="Forest"  />
</div>
<div class="responsive"  >
      <img src={theImage9} className="photobomb" alt="Forest" />
</div>
<div class="responsive"  >
  <img src={theImage10} className="photobomb" alt="Forest"  />

</div>

<div class="responsive"  >
      <img src={theImage14} className="photobomb" alt="Mountains"  />
</div>

<div style={{padding:'6px'}}>

</div>
</div>
)
}
}
export default Photos;
