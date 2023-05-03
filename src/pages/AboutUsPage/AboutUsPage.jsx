import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../AboutUsPage/styles/about.css";
import PeopleCards from "./PeopleCards";
import Figures from "./Figures";
import SectionInfo from "./SectionInfo";
const AboutUsPage = () => {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      {/* start Aidai's part */}
      <div className="first-content-container">
        <div
          style={{
            paddingLeft: "96px",
            paddingRight: "96px",
            position: "absolute",
            top: "33%",
            color: "white",
          }}
        >
          <div className="headline-about">
            <p>PERFORMANCE ON ALL LEVELS</p>
            <h1>THIS IS PUMA</h1>
          </div>
          <div className="text-about">
            <p>
              Sport has the power to transform and empower us. As one of the
              world’s leading sports brands, it’s only natural that we want to
              stand on the same playing field as the fastest athletes on the
              planet. To achieve that, the PUMA brand is based on the very
              values that make an excellent athlete.
            </p>
          </div>
        </div>
      </div>
      <div className="second-content-container">
        <div className="second-content-left">
          <h2 className="headline">
            <span className="spanbe">BE</span>
            <br />
            <span className="spanbrave">BRAVE</span>
          </h2>
          <div>
            <p
              style={{
                color: "white",
                paddingRight: "96px",
                color: "white",
                fontSize: "18px",
                lineHeight: "27px",
                letterSpacing: " -.1px",
                fontWeight: 400,
                lineHeight: "2em",
                // fontFamily: "DIN Pro,Arial,sans-serif",
              }}
            >
              We’re never afraid to take risks. We trust our instincts to make
              unexpected choices that push sport forward.
            </p>
            <br />
          </div>
        </div>
        <div className="second-content-right">
          <img
            style={{ width: "110%", height: 650, marginTop: 90 }}
            src="https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-08_1968_tommie-smith_black-power.jpg?as=1&h=1000&iar=1&w=1200&rev=0d7c67eadd634663aa66d355066e45ad&hash=277160DC1817F7E18D0CEFF482C5ADF0"
            alt=""
          />
        </div>
        <div className="arrow">
          <a href="#" class="previous1 round">
            &#8249;
          </a>
          <a href="#" class="next1 round">
            &#8250;
          </a>
        </div>
      </div>
      {/* finish Aidai's part */}
      {/* Start Meerim's part */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "12em 0",
          gap: "20px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{ width: "80%", display: "flex", justifyContent: "center" }}
          className="left"
        >
          <img
            style={{ width: "584px", height: "730px" }}
            src="https://cdn.about.puma.com/-/media/images/this-is-puma/m-11_16aw_brand_dna-wall_degrasse_01.jpg?as=1&h=960&iar=1&w=768&rev=ea503cfcfcfc46a0890f0fe2ad061114&hash=5ECA2670B51F9DBA58733CE13B4A291E"
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="right"
        >
          <div
            style={{ display: "flex", gap: "20px", opacity: 0.2 }}
            className="image-container"
          >
            <img
              style={{ width: "356px", height: "445px" }}
              src="https://cdn.about.puma.com/-/media/images/this-is-puma/quote_karsten.jpg?as=1&h=1280&iar=1&w=1024&rev=612e669f616e4929800846128b6865b5&hash=A4E77214D4C15E3D133546F699B7C508"
              alt="ph1"
            />
            <img
              style={{ width: "356px", height: "445px" }}
              src="https://cdn.about.puma.com/-/media/images/this-is-puma/quote_yaroslava.jpg?as=1&h=1280&iar=1&w=1024&rev=c890a9430eca4cdb8f301af1c1e1477b&hash=D7F77AEE66F736BB383B8F008D359126"
            />
          </div>
          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "50px",
              marginTop: "-55px",
              fontFamily: "Arial, san-serif",
            }}
            className="text-containar"
          >
            <h1
              style={{
                fontWeight: "50",
                fontSize: "57px",
                marginBottom: "36px",
                marginTop: "-8px",
                fontFamily: "DIN Pro,Arial,sans-serif",
              }}
            >
              I ALWAYS THINK THAT
              <br />
              <strong
                style={{
                  fontWeight: "700",
                  fontFamily: "Arial, san-serif",
                  fontSize: "60px",
                }}
              >
                I AM FOREVER FASTER.
              </strong>
            </h1>
            <p
              style={{
                fontSize: "34px",
                lineHeight: "36px",
                fontWeight: "600",
              }}
            >
              ANDRE DE GRASSE
            </p>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "-110px",
              marginLeft: "-110px",
            }}
          >
            <button
              className="prev"
              style={{
                height: "72px",
                width: "72px",
                backgroundColor: "#fff",
                border: "0 none",
                cursor: "pointer",
                zIndex: "20",
                fontSize: "40px",
                fontWeight: "none",
                color: "black",
                transition: "0.4s",
              }}
            >
              &#8249;
            </button>
            <button
              className="next"
              style={{
                height: "72px",
                width: "72px",
                backgroundColor: "#fff",
                border: "0 none",
                cursor: "pointer",
                zIndex: "20",
                fontSize: "40px",
                fontWeight: "none",
                color: "black",
                transition: "0.4s",
              }}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
        className="image"
      >
        <img
          style={{ width: "90%", zIndex: "-1" }}
          src="https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/our_sport_new.png?as=1&h=800&iar=1&w=1600&rev=c9329a524228411690b7d6be05085a90&hash=6C9E6132924926719943C44CE676E94C"
        />
      </div>
      <div
        style={{
          maxWidth: "41%",
          fontFamily: "DIN Pro,Arial,sans-serif",
          color: "#242b2f",
          marginLeft: "70px",
          paddingLeft: "10px",
          marginTop: "-135px",
          padding: "48px 48px 0px 0px",
          backgroundColor: "white",
          zIndex: "10",
        }}
        className="text-wrapper"
      >
        <h1
          style={{
            fontSize: "45px",
            lineHeight: "48px",
            fontWeight: "600",
            margin: "0px 0px 24px 0px",
          }}
          className="text-wrapper_tittle"
        >
          OUR SPORTS
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "27px",
            fontWeight: "400",
            marginBottom: "12px",
          }}
          className="text-wrapper_middle"
        >
          Share excitement in Teamsports, innovate Golf and bring style into
          Running and Training and performance into Motorsports. In the light of
          our FOREVER FASTER mission, we bring a high level of brand heat to
          sports and elevate PUMA to the next level.
        </p>
        <div
          style={{
            width: "60%",
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "12px",
            letterSpacing: "3.25px",
            transition: "ease-out 0.4s",
            margin: "50px 0px",
          }}
        >
          <a style={{ width: "12em" }} href="#">
            <button className="btn">EXPLORE OUR SPORTS</button>
          </a>
        </div>
      </div>
      <div></div>
      {/* End Meerim's part */}

      {/* Start Rysya's part */}
      <PeopleCards />
      <Figures />
      <SectionInfo />
      {/* Finish Rysya's part */}

      {/* Start last part */}
      <div style={{ height: "86px" }}></div>
      <div style={{ padding: "0 96px" }}>
        <div>
          <h4
            style={{
              fontSize: "45px",
              lineHeight: "48px",
              letterSpacing: "-2px",
              fontWeight: "600",
              wordWrap: "break-word",
              marginBottom: "18px",
            }}
          >
            PUMA HEADQUARTERS
          </h4>
          <br />
          <p
            style={{
              fontSize: "18px",
              lineHeight: "27px",
              letterSpacing: "-.1px",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            <strong style={{ fontWeight: "600" }}>
              Herzogenaurach, Germany
            </strong>
          </p>
        </div>
        <div style={{ height: "48px" }}></div>
        {/* start video */}
        <div>
          <img
            class="image fit center-center lazyautosizes lazyloaded"
            data-sizes="auto"
            src="https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-20-vorschaubild-mood-video-drohne-2/videopreview_hq.jpg?as=1&amp;h=608&amp;iar=1&amp;w=1080&amp;rev=-1&amp;hash=35413C3AA455D69C6B9E8347A535ABAC"
            data-src="https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-20-vorschaubild-mood-video-drohne-2/videopreview_hq.jpg?as=1&amp;h=608&amp;iar=1&amp;w=1080&amp;rev=-1&amp;hash=35413C3AA455D69C6B9E8347A535ABAC"
            alt=""
            title=""
            data-srcset="https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-20-vorschaubild-mood-video-drohne-2/videopreview_hq.jpg?as=1&amp;h=608&amp;iar=1&amp;w=1080&amp;rev=-1&amp;hash=35413C3AA455D69C6B9E8347A535ABAC 1080w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-20-vorschaubild-mood-video-drohne-2/videopreview_hq.jpg?as=1&amp;h=872&amp;iar=1&amp;w=1550&amp;rev=-1&amp;hash=313F4B50BC10177DCDA215A473FDBCDD 1550w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-20-vorschaubild-mood-video-drohne-2/videopreview_hq.jpg?as=1&amp;h=1080&amp;iar=1&amp;w=1920&amp;rev=-1&amp;hash=F1D1EE44E9680DFE1E96F7A6DBA9EDF9 1920w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-20-vorschaubild-mood-video-drohne-2/videopreview_hq.jpg?as=1&amp;h=1350&amp;iar=1&amp;w=2400&amp;rev=-1&amp;hash=66FF74D08EE96814BE1301506E14E2A9 2400w"
            srcset="https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-20-vorschaubild-mood-video-drohne-2/videopreview_hq.jpg?as=1&amp;h=608&amp;iar=1&amp;w=1080&amp;rev=-1&amp;hash=35413C3AA455D69C6B9E8347A535ABAC 1080w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-20-vorschaubild-mood-video-drohne-2/videopreview_hq.jpg?as=1&amp;h=872&amp;iar=1&amp;w=1550&amp;rev=-1&amp;hash=313F4B50BC10177DCDA215A473FDBCDD 1550w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-20-vorschaubild-mood-video-drohne-2/videopreview_hq.jpg?as=1&amp;h=1080&amp;iar=1&amp;w=1920&amp;rev=-1&amp;hash=F1D1EE44E9680DFE1E96F7A6DBA9EDF9 1920w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-20-vorschaubild-mood-video-drohne-2/videopreview_hq.jpg?as=1&amp;h=1350&amp;iar=1&amp;w=2400&amp;rev=-1&amp;hash=66FF74D08EE96814BE1301506E14E2A9 2400w"
            sizes="1327px"
          ></img>
          <iframe
            style={{
              width: "1327px",
              height: "746px",
              left: "0px",
              top: "0px",
              display: "none",
            }}
            src="https://www.youtube.com/embed/QMF4Fn1H0Y8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <br />
          <span
            style={{
              fontFamily: "DIN Pro,Arial,sans-serif",
              fontSize: "14px",
              lineHeight: "14px",
              fontWeight: "600",
              letterSpacing: "2px",
              wordWrap: "break-word",
              fontWeight: "400",
            }}
          >
            Video Credit: Andi Mährlein
          </span>
        </div>
      </div>
      <div style={{ height: "86px" }}></div>
      <div>
        <div>
          <h5
            style={{
              fontSize: "45px",
              lineHeight: "48px",
              letterSpacing: "-2px",
              fontWeight: "600",
              wordWrap: "break-word",
              marginBottom: "36px",
              padding: "0 48px",
            }}
          >
            PUMA BRANDS
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "78%",
            padding: "0 48px",
            justifyContent: "space-between",
          }}
        >
          <Card
            sx={{
              maxWidth: "345",
              border: "1px solid #d1d1cd ",

              paddingBottom: "96px",
              position: "relative",
              width: "calc(50% - 2 * 12px)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="260px"
                image="https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-23-stichd-logo-new.jpg?as=1&amp;h=147&amp;iar=1&amp;w=400&amp;rev=798cc2c388534412b9f5abdd1510ea07&amp;hash=2F87CCF1ED464CEDC412BA96ACB7E1E4"
                data-src="https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-23-stichd-logo-new.jpg?as=1&amp;h=147&amp;iar=1&amp;w=400&amp;rev=798cc2c388534412b9f5abdd1510ea07&amp;hash=2F87CCF1ED464CEDC412BA96ACB7E1E4"
                alt="stichd logo"
                title=""
                data-srcset="https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-23-stichd-logo-new.jpg?as=1&amp;h=147&amp;iar=1&amp;w=400&amp;rev=798cc2c388534412b9f5abdd1510ea07&amp;hash=2F87CCF1ED464CEDC412BA96ACB7E1E4 400w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-23-stichd-logo-new.jpg?as=1&amp;h=228&amp;iar=1&amp;w=620&amp;rev=798cc2c388534412b9f5abdd1510ea07&amp;hash=3F3126EE3FE78F16A915AAEB258EBA72 620w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-23-stichd-logo-new.jpg?as=1&amp;h=295&amp;iar=1&amp;w=800&amp;rev=798cc2c388534412b9f5abdd1510ea07&amp;hash=0ED92A3E21CCFE76AA9FA1FDAB8895A7 800w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-23-stichd-logo-new.jpg?as=1&amp;h=442&amp;iar=1&amp;w=1200&amp;rev=798cc2c388534412b9f5abdd1510ea07&amp;hash=121CDAE0DD24A7E56692683D85968C8E 1200w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-23-stichd-logo-new.jpg?as=1&amp;h=589&amp;iar=1&amp;w=1600&amp;rev=798cc2c388534412b9f5abdd1510ea07&amp;hash=617F149EBA05001118E3177A025D6381 1600w"
                srcset="https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-23-stichd-logo-new.jpg?as=1&amp;h=147&amp;iar=1&amp;w=400&amp;rev=798cc2c388534412b9f5abdd1510ea07&amp;hash=2F87CCF1ED464CEDC412BA96ACB7E1E4 400w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-23-stichd-logo-new.jpg?as=1&amp;h=228&amp;iar=1&amp;w=620&amp;rev=798cc2c388534412b9f5abdd1510ea07&amp;hash=3F3126EE3FE78F16A915AAEB258EBA72 620w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-23-stichd-logo-new.jpg?as=1&amp;h=295&amp;iar=1&amp;w=800&amp;rev=798cc2c388534412b9f5abdd1510ea07&amp;hash=0ED92A3E21CCFE76AA9FA1FDAB8895A7 800w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-23-stichd-logo-new.jpg?as=1&amp;h=442&amp;iar=1&amp;w=1200&amp;rev=798cc2c388534412b9f5abdd1510ea07&amp;hash=121CDAE0DD24A7E56692683D85968C8E 1200w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-23-stichd-logo-new.jpg?as=1&amp;h=589&amp;iar=1&amp;w=1600&amp;rev=798cc2c388534412b9f5abdd1510ea07&amp;hash=617F149EBA05001118E3177A025D6381 1600w"
                data-sizes="auto"
                sizes="698px"
              />
              <br />
              <CardContent>
                <Typography
                  sx={{
                    fontSize: " 27px",
                    lineHeight: "30px",
                    letterSpacing: "-.75px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                    marginBottom: "12px",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  STICHD
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "27px",
                    letterSpacing: "-.1px",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  Sports requires endurance. This applies to what we wear
                  underneath as well. All the better that the affiliate company
                  stichd is a member of the PUMA Group and develops, produces
                  and distributes bodywear and socks for PUMA and other
                  well-known brands.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                sx={{
                  backgroundColor: "#242b2f",
                  bottom: "0",
                  color: "#d3d3d3",
                  border: "solid 1px black",
                  left: "0",
                  position: "absolute",
                  margin: "30px 30px",
                  fontSize: "10px",
                  fontWeight: "500",
                  letterSpacing: "2.5px",
                  padding: "12px 24px",
                }}
                size="small"
              >
                Get fitted
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: "345",
              border: "1px solid #d1d1cd ",
              paddingBottom: "96px",
              position: "relative",
              width: "calc(50% - 2 * 12px)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="260px"
                image="https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/golf/m-23-golf-logo.png?as=1&amp;h=147&amp;iar=1&amp;w=400&amp;rev=3ee4361517074dd3938a80b0f31f32ff&amp;hash=867CE34879A6AF31EEDD746356AD0B38"
                data-src="https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/golf/m-23-golf-logo.png?as=1&amp;h=147&amp;iar=1&amp;w=400&amp;rev=3ee4361517074dd3938a80b0f31f32ff&amp;hash=867CE34879A6AF31EEDD746356AD0B38"
                alt=""
                title=""
                data-srcset="https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/golf/m-23-golf-logo.png?as=1&amp;h=147&amp;iar=1&amp;w=400&amp;rev=3ee4361517074dd3938a80b0f31f32ff&amp;hash=867CE34879A6AF31EEDD746356AD0B38 400w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/golf/m-23-golf-logo.png?as=1&amp;h=228&amp;iar=1&amp;w=620&amp;rev=3ee4361517074dd3938a80b0f31f32ff&amp;hash=A0D36464BE394923B84CDCA8C2A2BAB4 620w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/golf/m-23-golf-logo.png?as=1&amp;h=295&amp;iar=1&amp;w=800&amp;rev=3ee4361517074dd3938a80b0f31f32ff&amp;hash=5817A36FD321E185FB2256FD8C76795F 800w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/golf/m-23-golf-logo.png?as=1&amp;h=442&amp;iar=1&amp;w=1200&amp;rev=3ee4361517074dd3938a80b0f31f32ff&amp;hash=D85D3A83B63B27535B299B31FB9D3748 1200w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/golf/m-23-golf-logo.png?as=1&amp;h=589&amp;iar=1&amp;w=1600&amp;rev=3ee4361517074dd3938a80b0f31f32ff&amp;hash=8A060D9DD5EC933B6209CC0A55770C0E 1600w"
                srcset="https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/golf/m-23-golf-logo.png?as=1&amp;h=147&amp;iar=1&amp;w=400&amp;rev=3ee4361517074dd3938a80b0f31f32ff&amp;hash=867CE34879A6AF31EEDD746356AD0B38 400w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/golf/m-23-golf-logo.png?as=1&amp;h=228&amp;iar=1&amp;w=620&amp;rev=3ee4361517074dd3938a80b0f31f32ff&amp;hash=A0D36464BE394923B84CDCA8C2A2BAB4 620w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/golf/m-23-golf-logo.png?as=1&amp;h=295&amp;iar=1&amp;w=800&amp;rev=3ee4361517074dd3938a80b0f31f32ff&amp;hash=5817A36FD321E185FB2256FD8C76795F 800w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/golf/m-23-golf-logo.png?as=1&amp;h=442&amp;iar=1&amp;w=1200&amp;rev=3ee4361517074dd3938a80b0f31f32ff&amp;hash=D85D3A83B63B27535B299B31FB9D3748 1200w, https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/golf/m-23-golf-logo.png?as=1&amp;h=589&amp;iar=1&amp;w=1600&amp;rev=3ee4361517074dd3938a80b0f31f32ff&amp;hash=8A060D9DD5EC933B6209CC0A55770C0E 1600w"
                sizes="698px"
                data-sizes="auto"
              />
              <br />
              <CardContent>
                <Typography
                  sx={{
                    fontSize: " 27px",
                    lineHeight: "30px",
                    letterSpacing: "-.75px",
                    fontWeight: "600",
                    wordWrap: "break-word",
                    marginBottom: "12px",
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  COBRA PUMA GOLF
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "27px",
                    letterSpacing: "-.1px",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  A team is only as good as its players. As an important player
                  in the golf sector, COBRA PUMA GOLF provides shoes, apparel
                  and clubs.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                sx={{
                  backgroundColor: "#242b2f",
                  bottom: "0",
                  color: "#d3d3d3",
                  border: "solid 1px black",
                  left: "0",
                  position: "absolute",
                  margin: "30px 30px",
                  fontSize: "10px",
                  fontWeight: "500",
                  letterSpacing: "2.5px",
                  padding: "12px 24px",
                }}
                size="small"
              >
                VISIT THE COURSE
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
      {/* Finish last part */}
    </div>
  );
};

export default AboutUsPage;
