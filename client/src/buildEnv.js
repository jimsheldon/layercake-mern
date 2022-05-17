// during the build step we'll sed? the http, localhost and port out.

export default function buildEnvs() {
    function getServerHostAndPort() {
        return 'http://localhost:5001'
    }
}
