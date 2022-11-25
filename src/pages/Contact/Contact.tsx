import React from 'react'
import './../../assets/scss/pages/_contact.scss'
type Props = {}

export default function Support({ }: Props) {
  const contact1 = require('../../assets/img/contact/contact1.jpg');
  const contact2 = require('../../assets/img/contact/contact2.jpg');
  return (
    <div className='contact_main'>
            <div className="container">
                    <div className="contact">
                          <div className="contact1">
                          <div className="row">
                            <div className="col-6 ">
                                <div className="contact_img">
                                    <img style={{width:'100%'}} src={contact1} alt="" />
                                </div>
                            </div>

                            <div className="col-6">
                              <div className="contact_title">
                                  <h1>Tư vấn lộ trình cho bạn</h1>
                                  <p>Chúng tôi sẽ tư vấn miễn phí bạn toàn bộ chương trình, lộ trình để thành công trong lĩnh vực lập trình với thời gian và chi phí tối ưu nhất.</p>
                              </div>
                            </div>
                          </div>
                          </div>

                          <div className="contact2">
                                <div className="row">
                                  <div className="col-6">
                                  <div className="contact2_content">
                                <h2>Hãy liên lạc với chúng tôi</h2>
                                <p><i className="fa fa-map-marker-alt"></i>  336/12 Phường 12, Quận 10, TPHCM</p>
                                <p><i className="fas fa-phone-alt"></i>  0934.923.643</p>
                                <p><i className="fab fa-facebook-square"></i> <a href="https://www.facebook.com/vietvu.22.06" target={'_blank'}>https://www.facebook.com/vietvu.22.06</a></p>
                               
                                </div>
                                  </div>

                              <div className="col-6">
                                  <div className="contact2_img">
                                      <img style={{width:'100%'}} src={contact2} alt="" />
                                  </div>
                              </div>

                                </div>
                          </div>

        </div>
      </div>


    </div>




  )
}