class sitemapBlogs extends React.Component {
    render() {
        return (
        <div>
        {
            userIds.user_ids.find(element=>element.toLowerCase()===this.props.match.params.id.toLowerCase()) ?
            <div>
                Post:{this.props.match.params.id}!
            </div> :
            <div>
                Could not find a Post with id: {this.props.match.params.id}
            </div>
        }
        </div>
        );
    }
   }
   export default sitemapBlogs;