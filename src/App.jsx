import "./styles.css";

export default function App() {
  return (
    <div className="library-page">
      <header className="topbar">
        <div className="logo">
          <span>المكتبة</span>
          <strong>التي في رأسي</strong>
        </div>

        <nav>
          <a href="#library">المكتبة</a>
          <a href="#index">الفهرس</a>
          <a href="#about">عن صاحبة المكتبة</a>
        </nav>
      </header>

      <main id="library" className="room">
        <section className="room-wall">

          <div className="window">
            <div className="window-sky">
              <span className="cloud cloud-one"></span>
              <span className="cloud cloud-two"></span>
            </div>
          </div>

          <div className="painting painting-one">
            <span>🌿</span>
          </div>

          <div className="painting painting-two">
            <span>🌷</span>
          </div>

          <div className="painting painting-three">
            <span>📖</span>
          </div>

          <div className="shelf-library">

            <div className="shelf-title">
              <span>رفوف</span>
              <small>أشياء بقيت هنا</small>
            </div>

            <div className="bookshelf">

              <Shelf
                number="01"
                title="أثرٌ بقي"
                description="أيام وذكريات وأشياء أخشى أن تنساها الأيام."
              />

              <Shelf
                number="02"
                title="ما يشغل البال"
                description="أسئلة وأفكار وأشياء لا تكف عن العودة."
              />

              <Shelf
                number="03"
                title="بين دفتي كتاب"
                description="كتب وقراءات وأفكار تركت شيئًا منها معي."
              />

              <Shelf
                number="04"
                title="محض فضول"
                description="أشياء بدأت بسؤال صغير."
              />

              <Shelf
                number="05"
                title="مشاهد عالقة"
                description="أفلام وألعاب وفن وشخصيات بقيت في الذاكرة."
              />

              <Shelf
                number="06"
                title="مما تعلّمت"
                description="علم وطب وتاريخ ولغة وكل ما تعلمته."
              />

            </div>
          </div>

          <div className="desk">
            <div className="desk-top"></div>

            <div className="desk-drawer">
              <span>♡</span>
            </div>

            <div className="picture-frame">
              <div className="picture-placeholder">
                <span>كونان</span>
                <span>هيجي</span>
              </div>
            </div>

            <div className="notebook">
              <span>فهرس</span>
            </div>
          </div>

          <div className="chair">
            <div className="chair-back"></div>
            <div className="chair-seat"></div>
          </div>

          <div className="lamp">
            <div className="lamp-shade"></div>
            <div className="lamp-stem"></div>
            <div className="lamp-base"></div>
          </div>

          <div className="plant">
            <span className="leaf leaf-one">🌿</span>
            <span className="leaf leaf-two">🌿</span>
            <span className="leaf leaf-three">🌱</span>
            <div className="plant-pot"></div>
          </div>

        </section>

        <section className="room-floor">
          <div className="rug"></div>
        </section>

      </main>

      <div className="welcome-note">
        <span>أهلًا بكِ</span>
        <p>خذي وقتكِ... المكتبة لا تستعجل أحدًا.</p>
      </div>
    </div>
  );
}

function Shelf({ number, title, description }) {
  return (
    <button className="shelf" type="button">
      <span className="shelf-number">{number}</span>

      <span className="shelf-books">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </span>

      <span className="shelf-label">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
    </button>
  );
                }
