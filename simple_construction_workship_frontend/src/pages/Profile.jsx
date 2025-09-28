import React from 'react';
import '../assets/common.css';
import '../assets/profile-907-374.css';

// PUBLIC_INTERFACE
export default function Profile() {
  /** Profile screen converted from static HTML. */
  return (
    <div className="canvas-wrap">
      <div className="canvas" style={{ width: 375, height: 998, background: 'var(--color-f8f9fa)' }}>
        {/* Status Bar */}
        <div className="abs statusbar" style={{ left: 0, top: 0, width: 375, height: 44, background: 'var(--color-ffffff)' }}>
          <div className="abs typo-24" style={{ left: 29.5, top: 14, width: 28, height: 20 }}>9:41</div>
          <img alt="battery-inner" className="abs icon" src="/assets/figmaimages/figma_image_907_376_44_1270.png" style={{ left: 346, top: 18, width: 20, height: 9.5 }} />
          <img alt="battery-body" className="abs icon" src="/assets/figmaimages/figma_image_907_376_44_1271.png" style={{ left: 338, top: 17, width: 22, height: 11.5 }} />
        </div>

        {/* Top bar */}
        <div className="abs topbar" style={{ left: 0, top: 44, width: 375, height: 64, background: 'var(--color-ffffff)' }}>
          <div className="abs typo-31" style={{ left: 24, top: 22, width: 200, height: 30 }}>Profile</div>
          <img alt="edit" className="abs icon" src="/assets/figmaimages/figma_image_907_377_512_3578.png" style={{ left: 331, top: 26, width: 20, height: 20 }} />
        </div>

        {/* Profile header */}
        <div className="abs" style={{ left: 24, top: 132, width: 327, height: 80 }}>
          <div className="abs" style={{ left: 0, top: 0, width: 70, height: 70, borderRadius: 100, overflow: 'hidden', border: '2.5px solid var(--color-e4e7eb)' }}>
            <img src="/assets/figmaimages/figma_image_907_381.png" alt="profile" className="img-cover" />
          </div>
          <div className="abs" style={{ left: 86, top: 0, width: 241, height: 80 }}>
            <div className="typo-31" style={{ width: 241, height: 32, lineHeight: '32px' }}>Craftsman Craig</div>
            <div className="typo-30" style={{ width: 241, height: 18, top: 32, position: 'absolute' }}>ID#008638  •  Workers</div>
            <div className="abs" style={{ left: 0, top: 58, width: 138, height: 22, borderRadius: 12, border: '1px solid var(--color-56bd66)', display: 'flex', alignItems: 'center' }}>
              <img alt="user-circle" src="/assets/figmaimages/figma_image_907_386_503_7440.png" style={{ width: 12, height: 12, marginLeft: 6, marginRight: 6 }} />
              <div className="typo-41" style={{ color: 'var(--color-56bd66)' }}>Change to Manager</div>
            </div>
          </div>
        </div>

        {/* Overview card */}
        <div className="abs radius-8" style={{ left: 24, top: 239, width: 327, height: 214, background: 'var(--color-323f4b)', overflow: 'hidden' }}>
          <div className="abs" style={{ left: 16, top: 16, width: 295, height: 22 }}>
            <div className="abs typo-42" style={{ left: 0, top: 1, width: 202, height: 20, color: 'var(--color-ffffff)' }}>Overview</div>
            <div className="abs" style={{ right: 0, top: 0, width: 89, height: 22, background: 'var(--color-323f4b)', borderRadius: 12, border: '1px solid rgba(255,255,255,.2)' }}>
              <div className="abs typo-28" style={{ left: 8, top: 2, width: 60, height: 18, color: 'var(--color-ffffff)' }}>This week</div>
              <img alt="chev-down" src="/assets/figmaimages/figma_image_907_390_512_3726.png" className="abs icon" style={{ left: 69, top: 5, width: 12, height: 12, filter: 'invert(1)' }} />
            </div>
          </div>

          {/* Graph area (visual only) */}
          <div className="abs" style={{ left: 8, top: 57, width: 311, height: 82 }}>
            <div className="abs" style={{ left: 6, top: 0, width: 30, height: 82 }}>
              <img alt="bar-base-1" src="/assets/figmaimages/figma_image_907_393.png" className="abs icon" style={{ left: 11, top: 0, width: 8, height: 60 }} />
              <img alt="bar-active-1" src="/assets/figmaimages/figma_image_907_394.png" className="abs icon" style={{ left: 11, top: 15, width: 8, height: 45 }} />
              <div className="abs" style={{ left: 0, top: 70, width: 30, height: 12 }}>
                <div className="typo-43" style={{ fontFamily: 'var(--font-rubik)', fontSize: 'var(--fs-10)', lineHeight: 'var(--lh-12)', textAlign: 'center', color: '#fff' }}>06/14</div>
              </div>
            </div>
            <div className="abs" style={{ left: 58, top: 0, width: 8, height: 60 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: 8, height: 60, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}></div>
              <img alt="bar-active-2" src="/assets/figmaimages/figma_image_907_398.png" className="abs icon" style={{ left: 0, top: 10, width: 8, height: 50 }} />
            </div>
            <div className="abs" style={{ left: 88, top: 0, width: 29, height: 82 }}>
              <div className="abs" style={{ left: 10, top: 0, width: 8, height: 60, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}></div>
              <div className="abs" style={{ left: 10, top: 15, width: 8, height: 45, background: '#ffffff', borderRadius: 2 }}></div>
              <div className="abs" style={{ left: 0, top: 70, width: 29, height: 12 }}>
                <div className="typo-43" style={{ fontFamily: 'var(--font-rubik)', fontSize: 'var(--fs-10)', lineHeight: 'var(--lh-12)', textAlign: 'center', color: 'rgba(255,255,255,0.8)' }}>06/15</div>
              </div>
            </div>
            <div className="abs" style={{ left: 139, top: 0, width: 8, height: 60 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: 8, height: 60, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}></div>
              <img alt="bar-active-4" src="/assets/figmaimages/figma_image_907_405.png" className="abs icon" style={{ left: 0, top: 20, width: 8, height: 40 }} />
            </div>
            <div className="abs" style={{ left: 169, top: 0, width: 29, height: 82 }}>
              <div className="abs" style={{ left: 10, top: 0, width: 8, height: 60, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}></div>
              <div className="abs" style={{ left: 10, top: 10, width: 8, height: 50, background: '#ffffff', borderRadius: 2 }}></div>
              <div className="abs" style={{ left: 0, top: 70, width: 29, height: 12 }}>
                <div className="typo-43" style={{ fontFamily: 'var(--font-rubik)', fontSize: 'var(--fs-10)', lineHeight: 'var(--lh-12)', textAlign: 'center', color: 'rgba(255,255,255,0.8)' }}>06/15</div>
              </div>
            </div>
            <div className="abs" style={{ left: 220, top: 0, width: 8, height: 60 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: 8, height: 60, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}></div>
              <img alt="bar-active-6" src="/assets/figmaimages/figma_image_907_412.png" className="abs icon" style={{ left: 0, top: 30, width: 8, height: 30 }} />
            </div>
            <div className="abs" style={{ left: 250, top: 0, width: 34, height: 82 }}>
              <div className="abs" style={{ left: 13, top: 0, width: 8, height: 60, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}></div>
              <img alt="bar-active-today" src="/assets/figmaimages/figma_image_907_416.png" className="abs icon" style={{ left: 13, top: 50, width: 8, height: 10 }} />
              <div className="abs" style={{ left: 0, top: 70, width: 34, height: 12 }}>
                <div className="typo-43" style={{ fontFamily: 'var(--font-rubik)', fontSize: 'var(--fs-10)', lineHeight: 'var(--lh-12)', textAlign: 'center', color: '#fff' }}>Today</div>
              </div>
            </div>
          </div>

          {/* Info row */}
          <div className="abs" style={{ left: 16, top: 155, width: 295, height: 46 }}>
            <div className="abs" style={{ left: 0, top: 0, width: 98.3333, height: 46 }}>
              <div className="typo-44" style={{ width: 32, height: 28, color: '#ffffff' }}>78h</div>
              <div className="typo-45" style={{ position: 'absolute', left: -11, top: 28, width: 77, height: 18, color: '#ffffff' }}>TOTAL WORK</div>
            </div>
            <div className="abs" style={{ left: 98.3333, top: 0, width: 98.3333, height: 46 }}>
              <div className="typo-44" style={{ width: 11, height: 28, color: '#ffffff' }}>6</div>
              <div className="typo-45" style={{ position: 'absolute', left: -20, top: 28, width: 66, height: 18, color: '#ffffff' }}>UPCOMING</div>
            </div>
            <div className="abs" style={{ left: 196.6666, top: 0, width: 98.3333, height: 46 }}>
              <div className="typo-44" style={{ width: 21, height: 28, color: '#ffffff' }}>12</div>
              <div className="typo-45" style={{ position: 'absolute', left: -16, top: 28, width: 73, height: 18, color: '#ffffff' }}>COMPLETED</div>
            </div>
          </div>
        </div>

        {/* Tax callout */}
        <div className="abs" style={{ left: 24, top: 480, width: 327, height: 64, background: '#ffffff', border: '1px solid var(--color-56bd66)', borderRadius: 8 }}>
          <div className="abs" style={{ left: 16, top: 16, width: 32, height: 32 }}>
            <img alt="green-bg" src="/assets/figmaimages/figma_image_907_430.png" className="abs icon" style={{ left: 0, top: 0, width: 32, height: 32 }} />
            <img alt="credit-solid" src="/assets/figmaimages/figma_image_907_431.png" className="abs icon" style={{ left: 6, top: 6, width: 20, height: 20 }} />
          </div>
          <div className="abs" style={{ left: 80, top: 8, width: 215, height: 48 }}>
            <div className="typo-15" style={{ color: 'var(--color-323f4b)' }}>Fil Out Tax Form</div>
            <div className="typo-46" style={{ color: 'var(--color-56bd66)' }}>Fill out tax form and sign it to get verified</div>
          </div>
          <img alt="chev-down" src="/assets/figmaimages/figma_image_907_435_517_11393.png" className="abs icon" style={{ left: 335, top: 25, width: 8, height: 4.8, transform: 'translateX(-50%)' }} />
        </div>

        {/* Rows */}
        <div className="abs row-divider" style={{ left: 0, top: 568, width: 375, height: 56, background: '#ffffff', borderTop: '1px solid var(--color-e4e7eb)', borderBottom: '1px solid var(--color-e4e7eb)' }}>
          <div className="abs" style={{ left: 24, top: 16, width: 122, height: 24 }}>
            <img alt="credit-outline" src="/assets/figmaimages/figma_image_907_438.png" className="abs icon" style={{ left: 0, top: 0, width: 24, height: 24 }} />
            <div className="abs typo-47" style={{ left: 40, top: 0, width: 82, height: 24 }}>My Balance</div>
          </div>
          <div className="abs" style={{ left: 268, top: 16, width: 83, height: 24 }}>
            <div className="abs typo-34" style={{ left: 0, top: 0, width: 51, height: 24, color: 'var(--color-9aa5b1)' }}>$1,560</div>
            <img alt="chev-down" src="/assets/figmaimages/figma_image_907_390_512_3726.png" className="abs icon" style={{ left: 67, top: 4, width: 16, height: 16 }} />
          </div>
        </div>

        <div className="abs row-divider" style={{ left: 0, top: 624, width: 375, height: 56, background: '#ffffff', borderBottom: '1px solid var(--color-e4e7eb)' }}>
          <div className="abs" style={{ left: 24, top: 16, width: 122, height: 24 }}>
            <img alt="newspaper" src="/assets/figmaimages/figma_image_907_445.png" className="abs icon" style={{ left: 0, top: 0, width: 24, height: 24 }} />
            <div className="abs typo-47" style={{ left: 40, top: 0, width: 82, height: 24 }}>Documents</div>
          </div>
          <img alt="chev-down" src="/assets/figmaimages/figma_image_907_390_512_3726.png" className="abs icon" style={{ left: 343, top: 20, width: 16, height: 16 }} />
        </div>

        <div className="abs row-divider" style={{ left: 0, top: 680, width: 375, height: 56, background: '#ffffff', borderBottom: '1px solid var(--color-e4e7eb)' }}>
          <div className="abs" style={{ left: 24, top: 16, width: 97, height: 24 }}>
            <img alt="cog" src="/assets/figmaimages/figma_image_907_450.png" className="abs icon" style={{ left: 0, top: 0, width: 24, height: 24 }} />
            <div className="abs typo-47" style={{ left: 40, top: 0, width: 57, height: 24 }}>Settings</div>
          </div>
          <img alt="chev-down" src="/assets/figmaimages/figma_image_907_390_512_3726.png" className="abs icon" style={{ left: 343, top: 20, width: 16, height: 16 }} />
        </div>

        <div className="abs row-divider" style={{ left: 0, top: 736, width: 375, height: 56, background: '#ffffff', borderBottom: '1px solid var(--color-e4e7eb)' }}>
          <div className="abs" style={{ left: 24, top: 16, width: 169, height: 24 }}>
            <img alt="lock" src="/assets/figmaimages/figma_image_907_455.png" className="abs icon" style={{ left: 0, top: 0, width: 24, height: 24 }} />
            <div className="abs typo-47" style={{ left: 40, top: 0, width: 129, height: 24 }}>Security & Privacy</div>
          </div>
          <img alt="chev-down" src="/assets/figmaimages/figma_image_907_390_512_3726.png" className="abs icon" style={{ left: 343, top: 20, width: 16, height: 16 }} />
        </div>

        <div className="abs row-divider" style={{ left: 0, top: 792, width: 375, height: 56, background: '#ffffff', borderBottom: '1px solid var(--color-e4e7eb)' }}>
          <div className="abs" style={{ left: 24, top: 16, width: 84, height: 24 }}>
            <img alt="info" src="/assets/figmaimages/figma_image_907_460.png" className="abs icon" style={{ left: 0, top: 0, width: 24, height: 24 }} />
            <div className="abs typo-47" style={{ left: 40, top: 0, width: 44, height: 24 }}>About</div>
          </div>
          <img alt="chev-down" src="/assets/figmaimages/figma_image_907_390_512_3726.png" className="abs icon" style={{ left: 343, top: 20, width: 16, height: 16 }} />
        </div>

        <div className="abs row-divider" style={{ left: 0, top: 848, width: 375, height: 56, background: '#ffffff', borderBottom: '1px solid var(--color-e4e7eb)' }}>
          <div className="abs" style={{ left: 24, top: 16, width: 89, height: 24 }}>
            <img alt="logout" src="/assets/figmaimages/figma_image_907_465.png" className="abs icon" style={{ left: 0, top: 0, width: 24, height: 24 }} />
            <div className="abs typo-47" style={{ left: 40, top: 0, width: 49, height: 24 }}>Logout</div>
          </div>
        </div>

        {/* Bottom bar (static visual) */}
        <div className="abs" style={{ left: 0, top: 900, width: 375, height: 98, background: '#ffffff' }}>
          <div className="abs" style={{ left: 0, top: 0, width: 375, height: 64 }}>
            <div className="abs" style={{ left: 10, top: 10, width: 75, height: 54 }}>
              <img alt="grid-add" src="/assets/figmaimages/figma_image_907_467_503_8266.png" className="abs icon" style={{ left: 25.5, top: 4, width: 24, height: 24 }} />
              <div className="abs typo-48" style={{ left: 0, top: 32, width: 75, height: 18, textAlign: 'center', color: 'var(--color-9aa5b1)' }}>Jobs</div>
            </div>
            <div className="abs" style={{ left: 103.333, top: 10, width: 75, height: 54 }}>
              <img alt="calendar" src="/assets/figmaimages/figma_image_907_467_503_8270.png" className="abs icon" style={{ left: 25.5, top: 4, width: 24, height: 24 }} />
              <div className="abs typo-48" style={{ left: 0, top: 32, width: 75, height: 18, textAlign: 'center', color: 'var(--color-9aa5b1)' }}>History</div>
            </div>
            <div className="abs" style={{ left: 196.666, top: 10, width: 75, height: 54 }}>
              <img alt="credit" src="/assets/figmaimages/figma_image_907_438.png" className="abs icon" style={{ left: 25.5, top: 4, width: 24, height: 24 }} />
              <div className="abs typo-48" style={{ left: 0, top: 32, width: 75, height: 18, textAlign: 'center', color: 'var(--color-9aa5b1)' }}>Payments</div>
            </div>
            <div className="abs" style={{ left: 290, top: 10, width: 75, height: 54 }}>
              <img alt="user-circle" src="/assets/figmaimages/figma_image_907_386_503_7440.png" className="abs icon" style={{ left: 25.5, top: 4, width: 24, height: 24 }} />
              <div className="abs typo-49" style={{ left: 0, top: 32, width: 75, height: 18, textAlign: 'center', color: 'var(--color-56bd66)', fontWeight: 700 }}>Profile</div>
            </div>
          </div>
          <div className="abs" style={{ left: 120, top: 79, width: 135, height: 5, borderRadius: 100, background: 'var(--color-323f4b)' }}></div>
        </div>
      </div>
    </div>
  );
}
