export class WidgetServiceClient {
  WHITEBOARD_URL = 'http://localhost:8080';
  findWidgetsForTopic(topicId) {
    return fetch(this.WHITEBOARD_URL + '/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
