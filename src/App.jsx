import "./styles.css";

const shelves = [
  {
    id: "01",
    title: "أثرٌ بقي",
    subtitle: "أيام وذكريات وأشياء تستحق أن تُحفظ.",
    color: "sage",
  },
  {
    id: "02",
    title: "ما يشغل البال",
    subtitle: "أسئلة وأفكار لا تكف عن العودة.",
    color: "rose",
  },
  {
    id: "03",
    title: "بين دفتي كتاب",
    subtitle: "قراءات وكتب وأشياء تركت أثرًا.",
    color: "blue",
  },
  {
    id: "04",
    title: "محض فضول",
    subtitle: "أشياء بدأت بسؤال صغير.",
    color: "cream",
  },
  {
    id: "05",
    title: "مشاهد عالقة",
    subtitle: "أفلام وألعاب وفن بقي في الذاكرة.",
    color: "dust",
  },
  {
    id: "06",
    title: "مما تعلّمت",
    subtitle: "علم وطب وتاريخ ولغة ومعرفة.",
    color: "olive",
  },
];

function Book({ color, height = "medium" }) {
  return (
    <span className={`book book-${color} book-${height}`} />
  );
}

function Shelf({ shelf, books }) {
  return (
    <button className="real-shelf" type="button">
      <div className="shelf-books">{books}</div>

      <div className="shelf-name">
        <span className="shelf-index">{shelf.id}</span>
        <span>{shelf.title}</span>
      </div>

      <div className="shelf-description">
        {shelf.subtitle}
      </div>
    </button>
  );
}

export default function App() {
  return (
    <div className="library-page">

      {/* ================= HEADER ================= */}

      <header className="site-header">
        <a className="site-title" href="#library">
          <span>المكتبة</span>
          <strong>التي في رأسي</strong>
        </a>

        <nav className="main-nav">
          <a href="#library">المكتبة</a>
          <a href="#index">الفهرس</a>
          <a href="#about">عن صاحبة المكتبة</a>
        </nav>

        <button className="quiet-menu" aria-label="القائمة">
          <span />
          <span />
        </button>
      </header>

      {/* ================= ROOM ================= */}

      <main id="library" className="room">

        <div className="wall">

          {/* Window */}

          <div className="window">
            <div className="window-glass">
              <div className="moon" />
              <div className="distant-hill hill-one" />
              <div className="distant-hill hill-two" />
              <div className="window-plant">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="window-frame vertical" />
            <div className="window-frame horizontal" />
          </div>

          {/* Wall art */}

          <div className="wall-art art-botanical">
            <span>✽</span>
            <small>flora</small>
          </div>

          <div className="wall-art art-landscape">
            <div className="tiny-sun" />
            <div className="tiny-mountain one" />
            <div className="tiny-mountain two" />
          </div>

          <div className="wall-art art-book">
            <span>❦</span>
            <small>read slowly</small>
          </div>

          {/* ================= BOOKCASE ================= */}

          <section className="bookcase" aria-label="رفوف المكتبة">

            <div className="bookcase-top">
              <span />
              <span />
            </div>

            <div className="case-crown">
              <div className="case-label">
                <small>PRIVATE LIBRARY</small>
                <strong>fi-raasi</strong>
              </div>
            </div>

            <div className="shelves">

              <Shelf
                shelf={shelves[0]}
                books={
                  <>
                    <Book color="sage" height="tall" />
                    <Book color="brown" />
                    <Book color="dust" height="short" />
                    <Book color="cream" height="tall" />
                    <Book color="rose" />
                    <Book color="olive" height="short" />
                  </>
                }
              />

              <Shelf
                shelf={shelves[1]}
                books={
                  <>
                    <Book color="blue" />
                    <Book color="rose" height="tall" />
                    <Book color="brown" height="short" />
                    <Book color="sage" />
                    <Book color="cream" height="tall" />
                    <Book color="dust" />
                  </>
                }
              />

              <Shelf
                shelf={shelves[2]}
                books={
                  <>
                    <Book color="brown" height="tall" />
                    <Book color="olive" />
                    <Book color="rose" height="short" />
                    <Book color="blue" height="tall" />
                    <Book color="cream" />
                    <Book color="sage" height="short" />
                    <Book color="brown" />
                  </>
                }
              />

              <Shelf
                shelf={shelves[3]}
                books={
                  <>
                    <Book color="dust" />
                    <Book color="cream" height="tall" />
                    <Book color="sage" height="short" />
                    <Book color="blue" />
                    <Book color="brown" height="tall" />
                    <Book color="rose" />
                  </>
                }
              />

              <Shelf
                shelf={shelves[4]}
                books={
                  <>
                    <Book color="rose" height="tall" />
                    <Book color="brown" />
                    <Book color="blue" height="short" />
                    <Book color="olive" />
                    <Book color="dust" height="tall" />
                    <Book color="cream" />
                  </>
                }
              />

              <Shelf
                shelf={shelves[5]}
                books={
                  <>
                    <Book color="sage" />
                    <Book color="blue" height="tall" />
                    <Book color="cream" />
                    <Book color="brown" height="short" />
                    <Book color="olive" height="tall" />
                    <Book color="rose" />
                    <Book color="dust" height="short" />
                  </>
                }
              />

            </div>
          </section>

          {/* ================= DESK ================= */}

          <div className="desk-scene">

            <div className="desk">
              <div className="desk-surface">

                <div className="picture">
                  <div className="picture-inner">
                    <span className="character-conan">●</span>
                    <span className="character-heiji">●</span>
                    <span className="picture-caption">
                      a little memory
                    </span>
                  </div>
                </div>

                <div className="open-book">
                  <div />
                  <div />
                </div>

                <div className="ink-pot">
                  <span />
                </div>

                <div className="pen" />

              </div>

              <div className="desk-front">
                <div className="drawer">
                  <span>✦</span>
                </div>
              </div>

              <div className="desk-leg left" />
              <div className="desk-leg right" />
            </div>

            {/* chair */}

            <div className="armchair">
              <div className="chair-back" />
              <div className="chair-seat" />
              <div className="chair-arm left" />
              <div className="chair-arm right" />
            </div>

          </div>

          {/* ================= LAMP ================= */}

          <button
            className="lamp"
            type="button"
            aria-label="تغيير إضاءة المكتبة"
          >
            <span className="lamp-glow" />
            <span className="lamp-shade" />
            <span className="lamp-stem" />
            <span className="lamp-base" />
          </button>

          {/* ================= PLANT ================= */}

          <div className="floor-plant">
            <div className="plant-leaves">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="plant-pot" />
          </div>

          {/* ================= DRAWER NOTE ================= */}

          <div className="tiny-note">
            <span>أهلًا بكِ</span>
            <p>
              خذي وقتكِ.
              <br />
              المكتبة لا تستعجل أحدًا.
            </p>
          </div>

        </div>

        <div className="floor">
          <div className="rug" />
        </div>

      </main>

      {/* ================= LOWER CONTENT ================= */}

      <section id="index" className="quiet-section index-section">
        <div>
          <small>THE INDEX</small>
          <h2>الفهرس</h2>
        </div>

        <p>
          ستجدين هنا كل ما كُتب في المكتبة،
          مرتبًا كما لو أنه فهرس صغير في دفتر قديم.
        </p>
      </section>

      <section id="about" className="quiet-section about-section">
        <div>
          <small>THE OWNER</small>
          <h2>عن صاحبة المكتبة</h2>
        </div>

        <p>
          هذه مكتبتي الصغيرة؛ المكان الذي أضع فيه كل ما أخشى أن تنساه الأيام.
        </p>
      </section>

      <footer>
        <span>fi-raasi</span>
        <span>© 2026</span>
      </footer>

    </div>
  );
            }
