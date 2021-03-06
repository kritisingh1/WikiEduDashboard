import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import UploadTable from './upload_table.jsx';
import { fetchRecentUploads } from '../../actions/recent_uploads_actions.js';

const HEADERS = [
      { title: I18n.t('recent_activity.image'), key: 'image' },
      { title: I18n.t('recent_activity.file_name'), key: 'file_name' },
      { title: I18n.t('recent_activity.uploaded_by'), key: 'username', style: { minWidth: 142 } },
      { title: I18n.t('recent_activity.usage_count'), key: 'usage_count', style: { width: 130 } },
      { title: I18n.t('recent_activity.datetime'), key: 'date', style: { width: 200 } },
    ];

export const RecentUploadsHandlerBase = createReactClass({
  displayName: 'RecentUploadsHandler',

  propTypes: {
    fetchRecentUploads: PropTypes.func,
    uploads: PropTypes.array,
    loading: PropTypes.bool
   },

  componentWillMount() {
    return this.props.fetchRecentUploads();
  },

  // setCourseScope(e) {
  //   const scoped = e.target.checked;
  //   return ServerActions.fetchRecentEdits({ scoped });
  // },

  render() {
    return (
      <div>
        <UploadTable
          loading={this.props.loading}
          uploads={this.props.uploads}
          headers={HEADERS}
        />
      </div>
    );
  }
});

const mapStateToProps = state => ({
  uploads: state.recentUploads.uploads,
  loading: state.recentUploads.loading
});

const mapDispatchToProps = {
  fetchRecentUploads
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentUploadsHandlerBase);
