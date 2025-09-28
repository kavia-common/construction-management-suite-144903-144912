import React from 'react';
import '../assets/common.css';
import '../assets/jobs-detail-open-907-267.css';

// PUBLIC_INTERFACE
export default function JobsDetailOpen() {
  /** This component renders the Jobs Detail - Open screen converted from static HTML.
   * Images are referenced from the public assets path (/assets/figmaimages/*).
   */
  return (
    <div className="canvas-wrap">
      <div className="canvas" style={{ width: 375, height: 1105 }}>
        {/* Status Bar */}
        <div className="abs statusbar" style={{ left: 0, top: 0, width: 375, height: 44 }}>
          <div className="abs typo-24" style={{ left: 29.5, top: 14, width: 28, height: 20 }}>9:41</div>
          <img alt="battery-inner" className="abs icon" src="/assets/figmaimages/figma_image_907_269_44_1270.png" style={{ left: 346, top: 18, width: 20, height: 9.5 }} />
          <img alt="battery-body" className="abs icon" src="/assets/figmaimages/figma_image_907_269_44_1271.png" style={{ left: 338, top: 17, width: 22, height: 11.5 }} />
        </div>

        {/* Top Bar */}
        <div className="abs topbar" style={{ left: 0, top: 44, width: 375, height: 64 }}>
          <img alt="chevron-left" className="abs icon" src="/assets/figmaimages/figma_image_907_270_512_5564.png" style={{ left: 24, top: 22, width: 20, height: 20 }} />
          <div className="abs" style={{ left: 99, top: 9, width: 181, height: 46 }}>
            <div className="typo-25" style={{ width: 181, height: 28, textAlign: 'center' }}>Job Details</div>
            <div className="typo-26" style={{ width: 181, height: 18, textAlign: 'center' }}>task#5323</div>
          </div>
          <img alt="more" className="abs icon" src="/assets/figmaimages/figma_image_907_270_512_5566.png" style={{ left: 331, top: 22, width: 20, height: 20 }} />
        </div>

        {/* Job Informations */}
        <div className="abs section-card" style={{ left: 0, top: 110, width: 375, height: 223 }}>
          <div className="abs" style={{ left: 24, top: 34, width: 327, height: 22 }}>
            <div className="abs typo-27" style={{ left: 0, top: 1, width: 225, height: 20 }}>10/05/2020</div>
            <div className="abs" style={{ left: 229, top: 0, width: 98, height: 22 }}>
              <div className="abs badge-dark" style={{ left: 0, top: 0, width: 44, height: 22 }}>
                <img alt="clock" className="abs icon" src="/assets/figmaimages/figma_image_907_276_503_7440.png" style={{ left: 6, top: 5, width: 12, height: 12 }} />
                <div className="abs typo-28" style={{ left: 26, top: 2, width: 14, height: 18 }}>3d</div>
              </div>
              <div className="abs badge-blue" style={{ left: 52, top: 0, width: 46, height: 22 }}>
                <div className="abs typo-29" style={{ left: 8, top: 2, width: 30, height: 18 }}>Open</div>
              </div>
            </div>
          </div>
          <div className="abs" style={{ left: 24, top: 72, width: 327, height: 66 }}>
            <div className="typo-30" style={{ width: 295, height: 18 }}>task#11123</div>
            <div className="typo-31" style={{ width: 295, height: 30 }}>Stainless roof renovations</div>
            <div className="abs" style={{ left: 0, top: 48, width: 327, height: 18 }}>
              <img alt="location" className="abs icon" src="/assets/figmaimages/figma_image_907_282.png" style={{ left: 0, top: 1, width: 16, height: 16 }} />
              <div className="abs typo-32" style={{ left: 20, top: 0, width: 307, height: 18 }}>Rose boulevard 12th, Cal, USA 1,3 km</div>
            </div>
          </div>
          <div className="abs pill" style={{ left: 24, top: 154, width: 327, height: 55 }}>
            <div className="abs" style={{ left: 8, top: 11.5, width: 54, height: 32 }}>
              <div className="abs avatar" style={{ left: 0, top: 0 }}>
                <img src="/assets/figmaimages/figma_image_907_286.png" alt="avatar-1" className="img-cover" />
              </div>
              <div className="abs avatar" style={{ left: 11, top: 0 }}></div>
              <div className="abs avatar" style={{ left: 22, top: 0 }}></div>
            </div>
            <div className="abs" style={{ left: 70, top: 9, width: 241, height: 39 }}>
              <div className="typo-33" style={{ width: 241, height: 21 }}>3 people</div>
              <div className="typo-30" style={{ width: 241, height: 18 }}>Keiko,  Jason, Peter</div>
            </div>
          </div>
        </div>

        {/* Unit Informations */}
        <div className="abs section-card" style={{ left: 0, top: 333, width: 375, height: 320 }}>
          <div className="abs typo-34" style={{ left: 24, top: 34, width: 295, height: 24 }}>UNIT INFORMATION</div>
          <div className="abs typo-31" style={{ left: 24, top: 62, width: 295, height: 30 }}>Stainless roof renovations</div>
          <div className="abs radius-8" style={{ left: 24, top: 96, width: 327, height: 160, overflow: 'hidden' }}>
            <img alt="map" src="/assets/figmaimages/figma_image_907_296.png" className="img-cover" />
            <img alt="pin" src="/assets/figmaimages/figma_image_907_298.png" className="abs icon" style={{ left: 154.5, top: 71.5, width: 18, height: 21 }} />
          </div>
          <div className="abs" style={{ left: 24, top: 260, width: 327, height: 18 }}>
            <img alt="loc" src="/assets/figmaimages/figma_image_907_282.png" className="abs icon" style={{ left: 0, top: 1, width: 16, height: 16 }} />
            <div className="abs typo-32" style={{ left: 20, top: 0, width: 307, height: 18 }}>Rose boulevard 12th 60121, Cal, USA 1,3 km</div>
          </div>
          <div className="abs typo-35" style={{ left: 24, top: 282, width: 86, height: 24 }}>View details</div>
        </div>

        {/* Manager's note */}
        <div className="abs section-card" style={{ left: 0, top: 653, width: 375, height: 164 }}>
          <div className="abs typo-34" style={{ left: 24, top: 24, width: 295, height: 24 }}>MANAGER NOTE</div>
          <div className="abs typo-27" style={{ left: 24, top: 52, width: 327, height: 60 }}>
            This machine can’t working well every i turn it on the AC always make a noisy sound, and the AC can always hot ever...
          </div>
          <div className="abs typo-35" style={{ left: 24, top: 116, width: 76, height: 24 }}>View more</div>
        </div>

        {/* Manager Informations */}
        <div className="abs section-card" style={{ left: 0, top: 817, width: 375, height: 144 }}>
          <div className="abs typo-34" style={{ left: 24, top: 24, width: 295, height: 24 }}>MANAGER INFORMATION</div>
          <div className="abs pill" style={{ left: 24, top: 64, width: 327, height: 56 }}>
            <div className="abs manager-img" style={{ left: 8, top: 8 }}>
              <img src="/assets/figmaimages/figma_image_907_310.png" alt="manager" className="img-cover" />
            </div>
            <div className="abs" style={{ left: 56, top: 8, width: 241, height: 40 }}>
              <div className="typo-33" style={{ width: 241, height: 21 }}>Jenny Wilson</div>
              <div className="typo-30" style={{ width: 241, height: 18 }}>ID#008638</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="abs" style={{ left: 0, top: 961, width: 375, height: 144 }}>
          <div className="abs" style={{ left: 0, top: 0, width: 375, height: 80 }}>
            <button className="abs btn-primary typo-36" style={{ left: 24, top: 16, width: 327, height: 48, borderRadius: 8 }}>Take Job</button>
          </div>
          <div className="abs" style={{ left: 0, top: 110, width: 375, height: 34 }}>
            <div className="abs home-indicator" style={{ left: 120, top: 21 }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
