import React, { useState } from 'react';
import '../assets/common.css';
import '../assets/take-this-jobs-907-315.css';

// PUBLIC_INTERFACE
export default function TakeThisJobs() {
  /** This component renders the "Take this jobs" screen with a modal interaction converted to React state. */
  const [showModal, setShowModal] = useState(true);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleConfirm = () => {
    setShowModal(false);
    // Placeholder for success state; could navigate or toast
    alert('Task taken successfully.');
  };

  return (
    <div className="canvas-wrap">
      <div className="canvas">
        {/* Status Bar */}
        <div className="abs statusbar">
          <div className="abs typo-24" style={{ left: 30, top: 13, width: 28, height: 20 }}>9:41</div>
          <img alt="battery-inner" className="abs" src="/assets/figmaimages/figma_image_907_675_44_1270.png" style={{ left: 346, top: 18, width: 20, height: 9.5 }} />
          <img alt="battery-body" className="abs" src="/assets/figmaimages/figma_image_907_675_44_1271.png" style={{ left: 338, top: 17, width: 22, height: 11.5 }} />
        </div>

        {/* Top bar */}
        <div className="abs topbar">
          <img alt="chevron-left" className="abs" src="/assets/figmaimages/figma_image_907_676_512_5564.png" style={{ left: 24, top: 22, width: 20, height: 20 }} />
          <div className="abs" style={{ left: 99, top: 9, width: 181, height: 46 }}>
            <div className="typo-25" style={{ textAlign: 'center', width: 181, height: 28 }}>Job Details</div>
            <div className="typo-26" style={{ textAlign: 'center', width: 181, height: 18, marginTop: 0 }}>task#5323</div>
          </div>
          <img alt="more" className="abs" src="/assets/figmaimages/figma_image_907_676_512_5566.png" style={{ left: 331, top: 22, width: 20, height: 20 }} />
        </div>

        {/* Content sections (abbreviated exactly per HTML) */}
        <div className="abs section-card" style={{ left: 0, top: 110, width: 375, height: 223, background: '#ffffff' }}>
          <div className="abs" style={{ left: 24, top: 34, width: 327, height: 22 }}>
            <div className="abs typo-27" style={{ left: 0, top: 1, width: 225, height: 20 }}>10/05/2020</div>
            <div className="abs" style={{ left: 229, top: 0, width: 98, height: 22 }}>
              <div className="abs" style={{ left: 0, top: 0, width: 44, height: 22, background: '#323f4b', borderRadius: 12 }}>
                <img alt="clock" src="/assets/figmaimages/figma_image_907_682_503_7440.png" className="abs" style={{ left: 6, top: 5, width: 12, height: 12 }} />
                <div className="abs typo-28" style={{ left: 26, top: 2, width: 14, height: 18 }}>3d</div>
              </div>
              <div className="abs" style={{ left: 52, top: 0, width: 46, height: 22, background: '#2bb0ed', borderRadius: 12 }}>
                <div className="abs typo-29" style={{ left: 8, top: 2, width: 30, height: 18 }}>Open</div>
              </div>
            </div>
          </div>
          <div className="abs" style={{ left: 24, top: 72, width: 327, height: 66 }}>
            <div className="typo-30" style={{ width: 295, height: 18 }}>task#11123</div>
            <div className="typo-31" style={{ width: 295, height: 30, marginTop: 0 }}>Stainless roof renovations</div>
            <div className="abs" style={{ left: 0, top: 48, width: 327, height: 18 }}>
              <img alt="loc" src="/assets/figmaimages/figma_image_907_688.png" className="abs" style={{ left: 0, top: 1, width: 16, height: 16 }} />
              <div className="abs typo-32" style={{ left: 20, top: 0, width: 307, height: 18 }}>Rose boulevard 12th, Cal, USA 1,3 km</div>
            </div>
          </div>
          <div className="abs" style={{ left: 24, top: 154, width: 327, height: 55, border: '1px solid var(--color-e4e7eb)', borderRadius: 100 }}>
            <div className="abs" style={{ left: 8, top: 11.5, width: 54, height: 32 }}>
              <div className="abs" style={{ left: 0, top: 0, width: 32, height: 32, border: '1px solid #ffffff', borderRadius: '100%', background: '#c4c4c4', overflow: 'hidden' }}>
                <img src="/assets/figmaimages/figma_image_907_692.png" alt="avatar1" className="img-cover" />
              </div>
              <div className="abs" style={{ left: 11, top: 0, width: 32, height: 32, border: '1px solid #ffffff', borderRadius: '100%', background: '#c4c4c4' }}></div>
              <div className="abs" style={{ left: 22, top: 0, width: 32, height: 32, border: '1px solid #ffffff', borderRadius: '100%', background: '#c4c4c4' }}></div>
            </div>
            <div className="abs" style={{ left: 70, top: 9, width: 241, height: 39 }}>
              <div className="typo-33" style={{ width: 241, height: 21 }}>3 people</div>
              <div className="typo-30" style={{ width: 241, height: 18, marginTop: 0 }}>Keiko,  Jason, Peter</div>
            </div>
          </div>
        </div>

        {/* Unit Information */}
        <div className="abs section-card" style={{ left: 0, top: 333, width: 375, height: 320, background: '#ffffff' }}>
          <div className="abs typo-34" style={{ left: 24, top: 34, width: 295, height: 24 }}>UNIT INFORMATION</div>
          <div className="abs typo-31" style={{ left: 24, top: 62, width: 295, height: 30 }}>Stainless roof renovations</div>
          <div className="abs radius-8" style={{ left: 24, top: 96, width: 327, height: 160, overflow: 'hidden' }}>
            <img alt="map" src="/assets/figmaimages/figma_image_907_702.png" className="img-cover" />
            <img alt="pin" src="/assets/figmaimages/figma_image_907_704.png" className="abs" style={{ left: 153, top: 68, width: 18, height: 21 }} />
          </div>
          <div className="abs" style={{ left: 24, top: 260, width: 327, height: 18 }}>
            <div className="abs" style={{ left: 0, top: 1, width: 16, height: 16, background: 'transparent' }}>
              <img src="/assets/figmaimages/figma_image_907_688.png" alt="loc" className="img-cover" />
            </div>
            <div className="abs typo-32" style={{ left: 20, top: 0, width: 307, height: 18 }}>Rose boulevard 12th 60121, Cal, USA 1,3 km</div>
          </div>
          <div className="abs typo-35" style={{ left: 24, top: 282, width: 86, height: 24 }}>View details</div>
        </div>

        {/* Manager note */}
        <div className="abs section-card" style={{ left: 0, top: 653, width: 375, height: 164, background: '#ffffff' }}>
          <div className="abs typo-34" style={{ left: 24, top: 24, width: 295, height: 24 }}>MANAGER NOTE</div>
          <div className="abs typo-27" style={{ left: 24, top: 52, width: 327, height: 60 }}>
            This machine can’t working well every i turn it on the AC always make a noisy sound, and the AC can always hot ever...
          </div>
          <div className="abs typo-35" style={{ left: 24, top: 116, width: 76, height: 24 }}>View more</div>
        </div>

        {/* Manager info */}
        <div className="abs section-card" style={{ left: 0, top: 817, width: 375, height: 144, background: '#ffffff' }}>
          <div className="abs typo-34" style={{ left: 24, top: 24, width: 295, height: 24 }}>MANAGER INFORMATION</div>
          <div className="abs" style={{ left: 24, top: 64, width: 327, height: 56, border: '1px solid var(--color-e4e7eb)', borderRadius: 100 }}>
            <div className="abs radius-100" style={{ left: 8, top: 8, width: 40, height: 40, overflow: 'hidden', border: '1.5px solid var(--color-e4e7eb)' }}>
              <img src="/assets/figmaimages/figma_image_907_716.png" alt="manager" className="img-cover" />
            </div>
            <div className="abs" style={{ left: 56, top: 8, width: 241, height: 40 }}>
              <div className="typo-33">Jenny Wilson</div>
              <div className="typo-30">ID#008638</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="abs" style={{ left: 0, top: 1927, width: 375, height: 114 }}>
          <div className="abs" style={{ left: 0, top: 0, width: 375, height: 80 }}>
            <button onClick={handleOpen} className="abs btn-primary typo-36" style={{ left: 24, top: 16, width: 327, height: 48, borderRadius: 8 }}>Take Job</button>
          </div>
          <div className="abs" style={{ left: 0, top: 80, width: 375, height: 34 }}>
            <div className="abs home-indicator" style={{ left: 120, top: 21 }}></div>
          </div>
        </div>

        {/* Overlay + Modal */}
        {showModal && (
          <>
            <div id="overlay" className="abs overlay" style={{ zIndex: 90 }} onClick={handleClose} />
            <div id="modalApproval" className="abs modal" style={{ left: 24, top: 149.5, zIndex: 100 }}>
              <div className="abs" style={{ left: 20, top: 20, width: 287, height: 473 }}>
                <div className="abs" style={{ left: 0, top: 0, width: 287, height: 243 }}>
                  <img alt="illustration" src="/assets/figmaimages/figma_image_907_366.png" className="abs" style={{ left: 68, top: 20, width: 151, height: 203 }} />
                </div>
                <div className="abs" style={{ left: 0, top: 255, width: 287, height: 62 }}>
                  <div className="typo-37" style={{ width: 287, height: 30 }}>Take this jobs?</div>
                  <div className="typo-38" style={{ width: 287, height: 24 }}>Service Gutters protection installation </div>
                </div>
                <div className="abs" style={{ left: 0, top: 357, width: 287, height: 116 }}>
                  <button onClick={handleConfirm} className="abs btn-primary typo-36" style={{ left: 0, top: 0, width: 287, height: 48, borderRadius: 8 }}>Yes, take this task</button>
                  <button onClick={handleClose} className="abs btn-white typo-39" style={{ left: 0, top: 68, width: 287, height: 48, borderRadius: 8 }}>Cancel</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
