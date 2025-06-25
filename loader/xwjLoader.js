function xwjLoader(source) {
const regSource = source.match(/^<script>([\s\S]+?)<\/script>$/)
    return regSource[1];
}
module.exports = xwjLoader;