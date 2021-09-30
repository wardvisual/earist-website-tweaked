module.exports = () => {
    return `
    <form>
        <h3>User Authentication</h3>
        <select name="module" id="module">
    <option value="applications">Applications</option>
    <option value="students">Students</option>
    </select>
        <input type="text" name="username" id="username" />
        <input type="password" name="password" id="password" />
        <button>login</button>
    </form>
    `
}