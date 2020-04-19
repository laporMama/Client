<template>
  <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <br>
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-info">
              <h3>Lapor Mama</h3>
              <p>A School Monitoring App in Your Hand</p>
            </div>
            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <!-- <li><i class="ion-ios-arrow-right"></i> <a href="https://db.ygoprodeck.com/api-guide/">API LINK</a></li> -->
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Creator</h4>
              <ul>
                <li><i class="ion-ios-arrow-right"></i> Adam Jay Pramusti</li>
                <li><i class="ion-ios-arrow-right"></i> Lukman Bayhaqi</li>
                <li><i class="ion-ios-arrow-right"></i> Ryan Maulana</li>
                <li><i class="ion-ios-arrow-right"></i> Tsani Muhammad Fajar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="copyright">
          &copy; Copyright <strong>LaporMama</strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by LaporMama
        </div>
      </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
#footer {
    background: #000;
    padding: 0 0 10px 0;
    color: #eee;
    font-size: 14px;
  }
  #footer .footer-top {
    background: #111;
  }
  /* #footer .footer-top .footer-info {
    margin-bottom: 30px;
  } */
  #footer .footer-top .footer-info h3 {
    font-size: 34px;
    margin: 0 0 2px 0;
    padding: 2px 0 2px 10px;
    line-height: 1;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    letter-spacing: 3px;
    border-left: 4px solid #18d26e;
  }
  #footer .footer-top .footer-info p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
    font-family: "Montserrat", sans-serif;
    color: #eee;
  }
  #footer .footer-top .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #333;
    color: #eee;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
  }
  #footer .footer-top .social-links a:hover {
    background: #18d26e;
    color: #fff;
  }
  #footer .footer-top h4 {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    position: relative;
    /* padding-bottom: 12px; */
  }
  #footer .footer-top h4::before,
  #footer .footer-top h4::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
  }
  #footer .footer-top h4::before {
    right: 0;
    background: #555;
  }
  #footer .footer-top h4::after {
    background: #18d26e;
    width: 60px;
  }
  /* #footer .footer-top .footer-links {
    margin-bottom: 30px;
  } */
  #footer .footer-top .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  #footer .footer-top .footer-links ul i {
    padding-right: 8px;
    color: #ddd;
  }
  #footer .footer-top .footer-links ul li {
    border-bottom: 1px solid #333;
    padding: 10px 0;
  }
  #footer .footer-top .footer-links ul li:first-child {
    padding-top: 0;
  }
  #footer .footer-top .footer-links ul a {
    color: #eee;
  }
  #footer .footer-top .footer-links ul a:hover {
    color: #18d26e;
  }
  /* #footer .footer-top .footer-contact {
    margin-bottom: 30px;
  } */
  #footer .footer-top .footer-contact p {
    line-height: 26px;
  }
  #footer .copyright {
    text-align: center;
    /* padding-top: 30px; */
  }
  #footer .credits {
    text-align: center;
    font-size: 13px;
    color: #ddd;
  }
  li {
    list-style: none;
  }
</style>
