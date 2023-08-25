import{_ as e,o as t,c as a,V as s}from"./chunks/framework.2af28b0a.js";const m=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started/introduction.md","filePath":"getting-started/introduction.md"}'),n={name:"getting-started/introduction.md"},o=s(`<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>This website is the companion to the <a href="https://github.com/thunderbiscuit/uniffi-examples" target="_blank" rel="noreferrer">uniffi-examples GitHub repository</a>, which hosts a series of examples that demonstrate how to develop language bindings libraries using the <a href="https://github.com/mozilla/uniffi-rs" target="_blank" rel="noreferrer">uniffi-rs</a> library, a tool created and maintained by Mozilla. For more information on the internals of uniffi-rs as well as how to use it, see the <a href="https://mozilla.github.io/uniffi-rs/" target="_blank" rel="noreferrer">official documentation</a>.</p><p>To learn how to expose Rust code using the examples, the most important files are located in the <code>calendar-ffi/src/</code> directories. The <code>calendar-ffi/src/lib.rs</code> file contains the Rust code that is exposed to the other languages. The <code>calendar-ffi/src/calendar.udl</code> file contains the API definition used by uniffi-rs to generate the bindings.</p><p>To see how to leverage the resulting libraries, explore and play with the tests written in Kotlin in the <code>calendar-kotlin/lib/src/test/kotlin/org/examples/calendar/CalendarTest.kt</code> files.</p><br><h2 id="build-the-examples-and-run-the-tests" tabindex="-1">Build the examples and run the tests <a class="header-anchor" href="#build-the-examples-and-run-the-tests" aria-label="Permalink to &quot;Build the examples and run the tests&quot;">​</a></h2><p>You can build the libraries and run the tests using directory-specific variations of the following commands:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:thunderbiscuit/uniffi-examples.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./uniffi-examples/</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./1-functions/calendar-kotlin/</span></span>
<span class="line"><span style="color:#FFCB6B;">./gradlew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">buildKotlinLib</span></span>
<span class="line"><span style="color:#FFCB6B;">./gradlew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span></code></pre></div>`,8),i=[o];function l(r,c,p,d,h,u){return t(),a("div",null,i)}const g=e(n,[["render",l]]);export{m as __pageData,g as default};
