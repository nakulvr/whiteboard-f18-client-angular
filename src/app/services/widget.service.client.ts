export class WidgetServiceClient {
  // WHITEBOARD_URL = 'http://localhost:8080';
  WHITEBOARD_URL = 'https://whiteboard-nakul-server-java.herokuapp.com/';
  findWidgetsForTopic(topicId) {
    return fetch(this.WHITEBOARD_URL + '/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
