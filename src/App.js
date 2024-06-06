import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Гайд WordPress</h1>
      <ol>
        <li>
          В папке <b>htdocs</b> создаем папку проекта
        </li>
        <li>
          В эту папку добавляем последнюю версию{' '}
          <a
            href="https://ru.wordpress.org/download/"
            target={'_blank'}
            rel="noreferrer"
          >
            Wordpress
          </a>
        </li>
        <li>
          Переходим в <b>phpMyAdmin</b>
        </li>
        <li>Переходим в базы данных</li>
        <li>Пишем имя, создаем базу данных</li>
        <li>Переходим во вкладку привилегии</li>
        <li>
          Добавляем нового пользователя(создаем имя, пароль, отмечаем все
          привилегии), жмем вперед
        </li>
        <li>Переходим в Wordpress вводим данные нажимаем отправить</li>
        <li>Жмем установить(пароль, название и имя могут быть любыми)</li>
        <li>
          Создаем тему{' '}
          <b>
            /htdocs/{'{название проекта}'}/wp-content/themes/
            {'{папка с темой}'}
          </b>
        </li>
        <li>
          Добавляем в папку с нашей темой картинку <b>screenshot.png</b>
        </li>
        <li>
          Создаем файл <b>style.css</b>, в него в самый верх добавляем
          комментарий
          <pre>
            <div className="numbers">
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
            </div>
            <code>
              <code className="comment">{'/*'}</code>
              <code className="comment">Theme Name: название темы</code>
              <code className="comment">{'*/'}</code>
            </code>
          </pre>
        </li>
        <li>
          Cоздаем папку <b>assets</b> в которую переносим все картинки, шрифты
        </li>
        <li>
          В конце <b>head</b> устанавливаем <b>{'<?php wp_head(); ?>'}</b>
          <pre>
            <div className="numbers">
              <code className="codeNumber">1</code>
              <code className="codeNumber">2</code>
            </div>
            <code>
              <code>{'<?php wp_head(); ?>'}</code>
              <code>{'</head>'}</code>
            </code>
          </pre>
        </li>
        <li>
          После футера <b>{'<?php wp_footer();?>'}</b>
          <pre>
            <div className="numbers">
              <code className="codeNumber">1</code>
              <code className="codeNumber">2</code>
              <code className="codeNumber">3</code>
            </div>
            <code>
              <code>{'</footer>'}</code>
              <code>{'<?php wp_footer();?>'}</code>
              <code>{'</body>'}</code>
            </code>
          </pre>
        </li>
        <li>
          Cоздаем файл <b>functions.php</b> в который подключаем все стили и
          скрипты
          <pre>
            <div className="numbers">
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
            </div>
            <code>
              <code>{'<?php'}</code>
              <code> </code>
              <code>{"add_action('wp_enqueue_scripts', 'scripts');"}</code>
              <code>{"add_action('wp_enqueue_scripts', 'styles');"}</code>
              <code> </code>
              <code>function scripts()</code>
              <code>{'{'}</code>
              <code>{'  '}wp_enqueue_script(</code>
              <code>{'    '}'scripts',</code>
              <code>
                {'    '}get_template_directory_uri() . '/assets/script.js',
              </code>
              <code>{'    '}[],</code>
              <code>{'    '}null,</code>
              <code>{'    '}true</code>
              <code>{'  '});</code>
              <code>{'}'}</code>
              <code> </code>
              <code>function styles()</code>
              <code>{'{'}</code>
              <code>
                {'  '}wp_enqueue_style('style', get_stylesheet_uri());
              </code>
              <code>{'}'}</code>
              <code> </code>
              <code>{'?>'}</code>
            </code>
          </pre>
        </li>
        <li>
          Через <b>{"<?= bloginfo('template_url'); ?>"}</b> создаем правильный
          путь к картинкам
        </li>
        <li>
          Переносим <b>header</b> в <b>header.php</b>, а <b>footer</b> в{' '}
          <b>footer.php</b>, в <b>index.php</b> добавляем вверх{' '}
          <b>{'<?php get_header(); ?>'}</b> вниз{' '}
          <b>{'<?php get_footer(); ?>'}</b>
        </li>
        <li>
          Cкачать <b>Advanced Custom Fields</b> и активировать его
        </li>
        <li>
          В процессе скачивания могут возникнуть ошибки, отследить их можно
          довавив в <b>wp-config.php</b>
          <pre>
            <div className="numbers">
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
            </div>
            <code>
              <code>{"define('WP_DEBUG', true);"}</code>
              <code>{"define('WP_DEBUG_DISPLAY', false);"}</code>
              <code>{"define('WP_DEBUG_LOG', true);"}</code>
            </code>
          </pre>
        </li>
        <li>
          <b>*</b> В файле <b>debug.log</b> можно будет отследить все ошибки
        </li>
        <li>
          Заходим в <b>страницы</b>, там будет <b>пример страницы</b>, переходим
          в него, из него удаляем все содержимое переименовывыем эту на{' '}
          <b>'Главная'</b>
        </li>
        <li>
          Переходим в настройки {'->'} чтение {'->'} На главной странице
          отображать {'->'} Статическую страницу, выбираем главную
        </li>
        <li>
          Переходим в <b>ACF</b> создаем поле, заполняем его, далее переходим на
          главную страницу, все поля должны подтянутся, заполняем их
        </li>
        <li>
          Правила {'->'} Показать эту группу полей, если {'->'} шаблон страницы{' '}
          {'->'} равно {'->'} шаблон по умолчанию
        </li>
        <li>
          В <b>index.php</b> (header.php, footer.php) находим нужную нам строку,
          удаляем содержимое и вместо этого вставляем{' '}
          <b>{"<?php the_field(''); ?>"}</b>, в скобочках пишем{' '}
          <b>'Название поля'</b> указанное в <b>ACF</b>
        </li>
        <li>
          Для циклов, создаем <b>рубрику</b>, пишем имя и ярлык (он понадобится)
        </li>
        <li>
          Переходим в <b>ACF</b>, создаем поле, Показать эту группу полей, если{' '}
          {'->'} рубрика записей {'->'} равно {'->'} выбираем нужную нам рубрику
        </li>
        <li>
          Переходим в записи {'->'} добавить запись {'->'} выбираем рубрику{' '}
          {'->'} заполняем
        </li>
        <li>
          Дальше нам потребуется функция{' '}
          <a
            href="https://wp-kama.ru/function/get_posts"
            target={'_blank'}
            rel="noreferrer"
          >
            get_posts
          </a>
          <pre>
            <div className="numbers">
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
              <code className="codeNumber"></code>
            </div>
            <code>
              <code>{'<?php'}</code>
              <code>{'  '}</code>
              <code className="comment">{'// параметры по умолчанию'}</code>
              <code>{'$my_posts = get_posts( array('}</code>
              <code>
                {'  '}
                {"'numberposts' => -1,"}
              </code>
              <code>
                {'  '}
                {"'category_name'    => 'рубрика',"}
              </code>
              <code>
                {'  '}
                {"'orderby'     => 'date',"}
              </code>
              <code>
                {'  '}
                {"'order'       => 'DESC',"}
              </code>
              <code>
                {'  '}
                {"'include'     => array(),"}
              </code>
              <code>
                {'  '}
                {"'exclude'     => array(),"}
              </code>
              <code>
                {'  '}
                {"'meta_key'    => '',"}
              </code>
              <code>
                {'  '}
                {"'meta_value'  =>'',"}
              </code>
              <code>
                {'  '}
                {"'post_type'   => 'post',"}
              </code>
              <code>
                {'  '}
                {"'suppress_filters' => true,"}
              </code>
              <code>{') );'}</code>
              <code>{'  '}</code>
              <code>{'global $post;'}</code>
              <code>{'  '}</code>
              <code>{'foreach( $my_posts as $post ){'}</code>
              <code>
                {'  '}
                {'setup_postdata( $post );'}
              </code>
              <code>{'?>'}</code>
              <code className="comment">{'// сюда вставляем блок html'}</code>
              <code>{'<?php'}</code>
              <code>{'}'}</code>
              <code>{'  '}</code>
              <code>wp_reset_postdata();</code>
              <code>{'  '}</code>
              <code>{'?>'}</code>
            </code>
          </pre>
        </li>
      </ol>
    </div>
  )
}

export default App
